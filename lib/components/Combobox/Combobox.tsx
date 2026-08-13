import {
  ComponentProps,
  CSSProperties,
  KeyboardEvent,
  useId,
  useRef,
  useState,
  FocusEvent,
} from "react";
import { useMergeRefs } from "@floating-ui/react";
import { ColorType, SizeType } from "@/types";
import { useIsMobile } from "@/hooks";
import { CaretDownIcon, XIcon } from "@/icons";
import { cssColorProps } from "@/util";
import { getSelectClasses } from "../Select/getSelectClasses";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteTrigger,
  Badge,
  Button,
  useButtonGroupContext,
} from "../index";

export type ComboboxProps = {
  /** Color variant of the combobox. */
  color?: ColorType;
  /** Combobox size option. */
  size?: SizeType;
  /** Array of selectable string items. */
  items: string[];
  /** Enables multi-selection mode. */
  multiple?: boolean;
  /** Label text displayed above the input. */
  label?: string;
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
  ref,
  ...rest
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    initialSelectedIndex,
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    initialSelectedIndices || [],
  );
  const [query, setQuery] = useState(value?.toString() || "");
  const group = useButtonGroupContext();
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
  const ariaLabel = rest["aria-label"] || label || undefined;
  const ariaLabeledBy = rest["aria-labelledby"];
  if (!ariaLabel && !ariaLabeledBy) {
    console.warn(
      "Please provide an aria label or labeledby for combobox without a label.",
    );
  }

  function setSelectedFromItem(item: string) {
    const index = items.indexOf(item);
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
        setValue(items[index]);
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

  const handleBlur = (e: FocusEvent) => {
    if (
      // containerRef.current?.contains(e.relatedTarget) ||
      floatingRef.current?.contains(e.relatedTarget)
    ) {
      requestAnimationFrame(() => {
        inputRef.current?.focus({ preventScroll: true });
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
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedIndex={selectedIndex}
      selectedIndices={selectedIndices}
    >
      <AutocompleteTrigger>
        <div
          ref={containerRef}
          className={wrapperClasses}
          style={{
            ...cssColorProps(resolvedColor),
            ...wrapperStyle,
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            if (!allowFreeText) {
              if (items.indexOf(query) < 0) {
                setValue("");
              }
            }
          }}
          onKeyDown={(e: KeyboardEvent) => {
            if (!multiple && e.key !== "ArrowDown") {
              setSelectedIndex(undefined);
            } else if (e.key === "Backspace") {
              if (query.length === 0 && selectedIndices.length > 0) {
                setSelectedIndices(selectedIndices.slice(0, -1));
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
                    key={items[index]}
                    className="m-[3px] flex cursor-auto items-center gap-0.5 p-0 pl-2 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {
                      <>
                        <span>{items[index]}</span>
                        <Button
                          aria-label={removeItemAriaLabel}
                          useGroup={false}
                          variant="ghost"
                          radius="pill"
                          size="xs"
                          className="p-0"
                          startIcon={<XIcon className="size-3.5" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsFocused(false);
                            setSelected(index);
                          }}
                        />
                      </>
                    }
                  </Badge>
                ))}
              <div className="flex flex-1 items-center justify-between">
                <input
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
                  onBlur={handleBlur}
                  style={{ scrollMarginTop: "24px" }}
                  id={resolvedId}
                  data-error={error ? true : undefined}
                  aria-describedby={
                    resolvedId && error ? `${resolvedId}-error` : undefined
                  }
                  name={multiple ? undefined : name}
                  aria-label={ariaLabel}
                  disabled={disabled}
                  className="text-main-content line-clamp-1 w-0 grow-1 cursor-text px-3 py-1.5 text-left focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                <div className="flex items-center">
                  {(selectedIndex !== undefined ||
                    selectedIndices.length > 0) && (
                    <Button
                      aria-label={removeAllItemsAriaLabel}
                      useGroup={false}
                      radius="pill"
                      size="sm"
                      variant="ghost"
                      color={isFocused ? resolvedColor : "main"}
                      className="h-6 p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFocused(false);
                        clear();
                      }}
                    >
                      <XIcon className={"mr-1 inline size-4"} />
                    </Button>
                  )}
                  <Button
                    aria-label={toggleOpenAriaLabel}
                    useGroup={false}
                    radius="pill"
                    size="sm"
                    variant="ghost"
                    color={isFocused ? resolvedColor : "main"}
                    className="h-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(!isOpen);
                    }}
                  >
                    <CaretDownIcon className={caretClasses} />
                  </Button>
                  {multiple &&
                    name &&
                    selectedIndices.map((index) => {
                      const value = items[index];
                      return (
                        <input
                          key={value}
                          type="hidden"
                          name={name}
                          value={value}
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
      </AutocompleteTrigger>
      <AutocompleteContent ref={floatingRef} />
    </Autocomplete>
  );
}
