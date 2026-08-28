import {
  ComponentProps,
  CSSProperties,
  KeyboardEvent,
  useId,
  useRef,
  useState,
  ReactNode,
  FocusEvent,
} from "react";
import { useMergeRefs } from "@floating-ui/react";
import { ColorType, SizeType } from "@/types";
import { useIsMobile } from "@/hooks";
import { CaretDownIcon, XIcon } from "@/icons";
import { cssColorProps } from "@/util";
import { getSelectClasses } from "../Select/getSelectClasses";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { AutocompleteContent } from "../Autocomplete/AutocompleteContent";
import { AutocompleteTrigger } from "../Autocomplete/AutocompleteTrigger";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { useButtonGroupContext } from "../Button/ButtonGroupContext";
import { SelectItem } from "../Select";

export type ComboboxProps = {
  /** Color variant of the combobox. */
  color?: ColorType;
  /** Combobox size option. */
  size?: SizeType;
  /** Array of selectable items. */
  items: SelectItem[];
  /** Enables multi-selection mode. */
  multiple?: boolean;
  /** Label text displayed above the input. */
  label?: ReactNode;
  /** Error message text. When provided, applies `error` semantic styles to the input. */
  error?: string;
  /** Allows arbitrary custom text input rather than strictly restricting values to the `items` list. */
  allowFreeText?: boolean;
  /** Initial selected item index for single-selection mode. */
  initialSelectedIndex?: number | undefined;
  /** Initial selected item indices for multi-selection mode. */
  initialSelectedIndices?: number[];
  /** Callback fired when the selected item index changes. */
  onSelectedIndexChange?: (index: number | undefined) => void;
  /** Additional CSS class names applied to the label element. */
  labelClassName?: string;
  /** Additional CSS class names applied to the error message element. */
  errorClassName?: string;
  /** Additional CSS class names applied to the outer wrapper element. */
  wrapperClassName?: string;
  /** Inline CSS properties applied to the outer wrapper element. */
  wrapperStyle?: CSSProperties;
  /** Accessible label applied to the clear-all button that removes all selected items at once. */
  removeAllItemsAriaLabel?: string;
  /** Accessible label applied to individual item remove buttons within multi-select chips. */
  removeItemAriaLabel?: string;
  /** Accessible label applied to the toggle button that expands or collapses the combobox dropdown. */
  toggleOpenAriaLabel?: string;
  /** Indicates if a clear button should be show. If not value is provided it will be shown for multi select and not shown for single select */
  showClearButton?: boolean;
  /** When set to `false`, forces a child button within a `ButtonGroup` to ignore group border and border-radius joining rules. */
  useGroup?: boolean;
} & Omit<ComponentProps<"input">, "size">;

/**
 * Advanced combobox input component supporting single or multi-item selection, custom free-text input,
 * and built-in autocomplete powered by list virtualization and fuzzy search for high-performance matching.
 *
 * Automatically applies error styling when the `error` prop is present.
 */
export function Combobox({
  size,
  items,
  color = "primary",
  multiple = false,
  id,
  label,
  disabled,
  error,
  allowFreeText = false,
  initialSelectedIndex,
  initialSelectedIndices,
  onSelectedIndexChange,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
  wrapperStyle,
  removeItemAriaLabel,
  removeAllItemsAriaLabel,
  toggleOpenAriaLabel,
  name,
  value,
  onChange,
  showClearButton,
  defaultValue,
  useGroup = true,
  ref,
  ...rest
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    initialSelectedIndex,
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    initialSelectedIndices || [],
  );
  const [query, setQuery] = useState(
    value?.toString() || defaultValue?.toString() || "",
  );
  const foundGroup = useButtonGroupContext();
  const group = useGroup ? foundGroup : null;
  const isMobile = useIsMobile();

  const {
    classes,
    labelClasses,
    errorClasses,
    caretClasses,
    wrapperClasses,
    resolvedColor,
  } = getSelectClasses({
    color: error ? "error" : color,
    size,
    isOpen,
    disabled,
    className: "cursor-auto " + className,
    labelClassName,
    errorClassName,
    wrapperClassName: wrapperClassName,
    group,
  });

  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const ariaLabel = rest["aria-label"];
  const ariaLabeledBy = rest["aria-labelledby"];
  if (!ariaLabel && !ariaLabeledBy && !label) {
    console.warn(
      "Please provide an aria label or labeledby for combobox without a label.",
    );
  }

  function setSelectedFromItem(item: string) {
    let index = -1;
    for (let i = 0; i < items.length; i++) {
      if (items[i].name === item) {
        index = i;
        break;
      }
    }
    setSelected(index);
  }

  function setSelected(index: number | undefined) {
    if (multiple && index !== undefined) {
      const found = selectedIndices.indexOf(index);
      let newIndices = [];
      if (found >= 0) {
        newIndices = selectedIndices.filter((i) => i !== index);
      } else {
        newIndices = [...selectedIndices, index];
      }
      setSelectedIndices(newIndices);
      setValue("");
    } else {
      setSelectedIndex(index);
      if (index !== undefined) {
        setValue(items[index].name);
        setIsOpen(false);
      } else {
        setValue("");
      }
    }

    if (onSelectedIndexChange) {
      onSelectedIndexChange(index);
    }
  }

  function clear() {
    setSelectedIndex(undefined);
    setSelectedIndices([]);
    setIsOpen(false);
    setValue("");
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    if (onSelectedIndexChange) {
      onSelectedIndexChange(undefined);
    }
  }

  function setValue(value: string) {
    setQuery(value);
    const input = inputRef.current;
    if (!input) return;

    const nativeSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )?.set;

    nativeSetter?.call(input, value.toString());

    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const inputRefs = useMergeRefs([ref, inputRef]);
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const showClear = showClearButton ?? multiple;

  const handleBlur = (e: FocusEvent) => {
    if (!allowFreeText) {
      if (selectedIndex) {
        setValue(items[selectedIndex].value);
      } else if (items.map((item) => item.name).indexOf(query) < 0) {
        setValue("");
      }
    }
    if (
      // containerRef.current?.contains(e.relatedTarget) ||
      floatingRef.current?.contains(e.relatedTarget)
    ) {
      requestAnimationFrame(() => {
        const input = inputRef.current;
        if (input) {
          input.focus({ preventScroll: true });
          const val = input.value;
          input.value = "";
          input.value = val;
        }
      });
    }
  };

  return (
    <Autocomplete
      color={color}
      query={query}
      onSelectItem={(item) => {
        setValue(item);
        setIsOpen(false);
        setSelectedFromItem(item);
      }}
      items={items.map((item) => item.name)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedIndex={selectedIndex}
      selectedIndices={selectedIndices}
      triggerRef={containerRef}
    >
      <div
        ref={containerRef}
        className={wrapperClasses}
        style={{
          ...cssColorProps(resolvedColor),
          ...wrapperStyle,
        }}
        onBlur={handleBlur}
        onKeyDown={(e: KeyboardEvent) => {
          if (!multiple && e.key === "Backspace") {
            setSelectedIndex(undefined);
            if (selectedIndex && onSelectedIndexChange) {
              onSelectedIndexChange(undefined);
            }
          } else if (e.key === "Backspace") {
            if (query.length === 0 && selectedIndices.length > 0) {
              setSelectedIndices(selectedIndices.slice(0, -1));
              if (onSelectedIndexChange) {
                const index =
                  selectedIndices.length > 0
                    ? selectedIndices.length - 1
                    : undefined;
                onSelectedIndexChange(index);
              }
            }
          }
        }}
      >
        <label htmlFor={resolvedId} className={labelClasses}>
          {label}
        </label>
        <div className="has-disabled:cursor-not-allowed">
          <div className={classes}>
            {multiple &&
              selectedIndices.map((index) => (
                <Badge
                  key={items[index].value}
                  className="m-1 flex cursor-auto items-center gap-0.5 p-0 pl-2 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {
                    <>
                      <span>{items[index].name}</span>
                      <Button
                        disabled={disabled}
                        type="button"
                        aria-label={removeItemAriaLabel}
                        useGroup={false}
                        variant="ghost"
                        radius="pill"
                        size="xs"
                        className="size-5 shrink-0 p-0"
                        startIcon={<XIcon className="size-3.5" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(index);
                        }}
                      />
                    </>
                  }
                </Badge>
              ))}
            <div className="flex h-[stretch] flex-1 items-center justify-between">
              <AutocompleteTrigger>
                <input
                  role="combobox"
                  onFocus={(e) => {
                    if (isMobile) {
                      const target = e.target;
                      setTimeout(() => {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 300);
                    }
                  }}
                  style={{ scrollMarginTop: "24px" }}
                  id={resolvedId}
                  data-error={error ? true : undefined}
                  aria-describedby={
                    resolvedId && error ? `${resolvedId}-error` : undefined
                  }
                  name={multiple ? undefined : name}
                  aria-label={ariaLabel}
                  aria-labelledby={ariaLabeledBy}
                  disabled={disabled}
                  className="text-main-content line-clamp-1 h-full w-full grow-1 cursor-text px-3 py-1.5 text-left focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  value={query}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value && value.length > 0) {
                      setIsOpen(true);
                    } else {
                      setIsOpen(false);
                    }
                    setValue(value);
                    if (onChange) {
                      onChange(e);
                    }
                  }}
                  ref={inputRefs}
                  {...rest}
                />
              </AutocompleteTrigger>
              <div className="flex h-full items-center">
                {(selectedIndex !== undefined || selectedIndices.length > 0) &&
                  showClear && (
                    <Button
                      disabled={disabled}
                      type="button"
                      aria-label={removeAllItemsAriaLabel}
                      useGroup={false}
                      radius="pill"
                      size="sm"
                      variant="ghost"
                      className="h-full shrink-0 p-1 text-inherit"
                      wrapperClassName="h-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        clear();
                      }}
                    >
                      <XIcon className={"inline size-4"} />
                    </Button>
                  )}
                <Button
                  disabled={disabled}
                  type="button"
                  aria-label={toggleOpenAriaLabel}
                  useGroup={false}
                  radius="pill"
                  size="xs"
                  wrapperClassName="h-full"
                  className="h-full px-2 py-0 text-inherit"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!floatingRef.current) {
                      setIsOpen(true);
                    }
                  }}
                >
                  <CaretDownIcon className={caretClasses} />
                </Button>
                {multiple &&
                  name &&
                  selectedIndices.map((index) => {
                    const item = items[index];
                    return (
                      <input
                        key={item.value}
                        type="hidden"
                        name={name}
                        value={item.value}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          {error && (
            <p id={`${resolvedId}-error`} className={errorClasses}>
              {error}
            </p>
          )}
        </div>
      </div>
      <AutocompleteContent ref={floatingRef} />
    </Autocomplete>
  );
}
