import {
  ComponentProps,
  CSSProperties,
  Ref,
  useCallback,
  useId,
  useRef,
  useState,
} from "react";
import { ColorType, MobileSheetPlacementType, SizeType } from "@/types";
import { SelectContextProvider } from "./SelectContext";
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { useFloatingTransitionStyles } from "@/hooks/useFloatingTransitionStyles";
import { getSelectClasses } from "./getSelectClasses";
import { cssColorProps } from "@/util";
import { CaretDownIcon, XIcon } from "@/icons";
import { Button, useButtonGroupContext } from "../Button";
import { Badge } from "../Badge";

export type SelectProps = {
  /** Color variant applied across the select trigger, dropdown surface, active items, and chips. */
  color?: ColorType;
  /** Select size option. */
  size?: SizeType;
  /** Accessible label text displayed above the select field. */
  label?: string;
  /** Array of selectable string option items rendered inside the dropdown overlay. */
  items: string[];
  /** Enables multi-selection mode allowing users to select multiple options as tags/chips. */
  multiple?: boolean;
  /** Form input name attribute submitted when wrapped within an HTML `<form>`. */
  name?: string;
  /** Error message displayed below the input field, applying validation styling when present. */
  error?: string;
  /** Controlled open state determining whether the option dropdown menu is visible. */
  isOpen?: boolean;
  /** Callback fired when the open or closed state of the dropdown menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Zero-based index of the initially selected item in single-selection mode. */
  initialSelectedIndex?: number | undefined;
  /** Array of zero-based indices for initially selected items in multi-selection mode. */
  initialSelectedIndices?: number[];
  /** Callback fired when the active option index selection changes. */
  onSelectedIndexChange?: (index: number | undefined) => void;
  /** Placeholder text displayed when no options are currently selected. */
  placeholder?: string;
  /** CSS positioning strategy used to render the dropdown menu overlay. Defaults to `"absolute"`. */
  strategy?: "absolute" | "fixed";
  /** Placement direction of the dropdown relative to the trigger input element. */
  placement?: Placement;
  /** Disables user interaction, preventing the dropdown from opening or options from being selected. */
  disabled?: boolean;
  /** When `true`, renders the options list inside a mobile sheet on smaller viewports. */
  mobileSheet?: boolean;
  /** Alignment placement for the mobile sheet view on smaller viewports. */
  mobileSheetPlacement?: MobileSheetPlacementType;
  /** Additional CSS class names applied directly to the field label element. */
  labelClassName?: string;
  /** Additional CSS class names applied directly to the validation error message element. */
  errorClassName?: string;
  /** Additional CSS class names applied to the outermost container wrapper element. */
  wrapperClassName?: string;
  /** Custom inline CSS styles applied to the outermost container wrapper element. */
  wrapperStyle?: CSSProperties;
  /** Accessible label applied to the button that removes all selected options at once. */
  removeAllItemsAriaLabel?: string;
  /** Accessible label applied to individual item remove buttons within multi-select chips. */
  removeItemAriaLabel?: string;
  /** React ref attached to the underlying hidden HTML `<input>` element for form integration. */
  inputRef?: Ref<HTMLInputElement>;
  /** Indicates if a clear button should be show. If not value is provided it will be shown for multi select and not shown for single select */
  showClearButton?: boolean;
} & ComponentProps<"div">;

/**
 * Customizable form selection control supporting single and multi-selection modes, custom floating positioning, and mobile sheet overlays.
 *
 * Manages accessibility bindings, option traversal, tag removal, and validation styling while
 * optionally syncing selected value states with a hidden HTML `<input>` for native form compatibility.
 */
export function Select({
  size,
  color,
  label,
  items,
  multiple = false,
  name,
  error,
  isOpen,
  onOpenChange,
  initialSelectedIndex,
  initialSelectedIndices,
  onSelectedIndexChange,
  placeholder,
  strategy = "absolute",
  placement = "bottom",
  mobileSheet = true,
  mobileSheetPlacement = "bottom",
  disabled,
  children,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
  wrapperStyle,
  removeItemAriaLabel,
  removeAllItemsAriaLabel,
  inputRef,
  id,
  showClearButton,
  ...rest
}: SelectProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    initialSelectedIndex,
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    initialSelectedIndices || [],
  );
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const controlled = isOpen !== undefined;
  const open = controlled ? isOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!controlled) {
        setUncontrolledOpen(value);
      }

      onOpenChange?.(value);
    },
    [controlled, onOpenChange],
  );

  const listRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const data = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement,
    middleware: [offset(2), flip(), shift({ padding: 8 })],
    strategy,
    whileElementsMounted: autoUpdate,
  });

  const { context } = data;
  const click = useClick(context);
  const role = useRole(context, { role: "combobox" });
  const dismiss = useDismiss(context, {
    bubbles: true,
    outsidePressEvent: "click",
  });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });
  const interactions = useInteractions([
    click,
    role,
    dismiss,
    listNav,
    typeahead,
  ]);
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(
    data,
    false,
    mobileSheet,
    mobileSheetPlacement,
  );

  const group = useButtonGroupContext();

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
    isOpen: open,
    isMounted,
    disabled,
    className,
    labelClassName,
    errorClassName,
    wrapperClassName,
    group,
  });

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
    } else {
      setSelectedIndex(index);
      setOpen(false);
    }

    if (onSelectedIndexChange) {
      onSelectedIndexChange(index);
    }
  }

  function clear() {
    setSelectedIndex(undefined);
    setSelectedIndices([]);
    setOpen(false);

    if (onSelectedIndexChange) {
      onSelectedIndexChange(undefined);
    }
  }

  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const ariaLabel = rest["aria-label"] || label || undefined;
  const ariaLabeledBy = rest["aria-labelledby"];
  if (!ariaLabel && !ariaLabeledBy) {
    console.warn(
      "Please provide an aria label or labeledby for combobox without a label.",
    );
  }

  let buttonText = placeholder;
  if (!multiple && selectedIndex !== undefined) {
    buttonText = items[selectedIndex];
  }

  const showClear = showClearButton ?? multiple;

  return (
    <SelectContextProvider
      value={{
        items,
        useFocus: true,
        color: resolvedColor,
        isOpen: disabled ? false : isMounted,
        setIsOpen: disabled ? () => {} : setOpen,
        multiple,
        activeIndex,
        setActiveIndex,
        selectedIndex,
        selectedIndices,
        setSelected,
        interactions,
        data,
        transitionStyles,
        listRef,
        labelsRef,
        mobileSheet,
        mobileSheetPlacement,
        returnFocus: true,
        isNested: false,
      }}
    >
      <div
        className={wrapperClasses}
        style={{ ...cssColorProps(resolvedColor), ...wrapperStyle }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      >
        <label id={resolvedId} className={labelClasses}>
          {label}
        </label>
        <div className="flex flex-col disabled:cursor-not-allowed">
          <div
            data-error={error ? true : undefined}
            aria-describedby={
              resolvedId && error ? `${resolvedId}-error` : undefined
            }
            aria-labelledby={resolvedId}
            aria-label={ariaLabel}
            className={classes}
            tabIndex={0}
            ref={context.refs.setReference}
            {...interactions.getReferenceProps()}
            {...rest}
          >
            {multiple &&
              selectedIndices.map((index) => (
                <Badge
                  key={items[index]}
                  className="m-1 flex cursor-auto items-center gap-0.5 p-0 pl-2 text-xs"
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
                        className="size-5 p-0"
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
            <div className="flex h-full w-max flex-1 items-center justify-between">
              <button
                aria-hidden={true}
                disabled={disabled}
                tabIndex={-1}
                className="line-clamp-1 h-full cursor-pointer px-3 py-1.5 text-left disabled:pointer-events-none disabled:opacity-50"
              >
                {buttonText}
              </button>
              <div className="flex items-center">
                {(selectedIndex !== undefined || selectedIndices.length > 0) &&
                  showClear && (
                    <Button
                      aria-label={removeAllItemsAriaLabel}
                      useGroup={false}
                      radius="pill"
                      size="sm"
                      variant="ghost"
                      color={isFocused || isMounted ? resolvedColor : "main"}
                      className="h-6 p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        clear();
                      }}
                    >
                      {<XIcon className={"mr-1 inline size-4"} />}
                    </Button>
                  )}
                <CaretDownIcon className={caretClasses} />
              </div>
            </div>
          </div>
          {name && !multiple && selectedIndex !== undefined && (
            <input
              ref={inputRef}
              name={name}
              type="hidden"
              value={items[selectedIndex]}
            />
          )}
          {name &&
            multiple &&
            selectedIndices.map((i) => {
              const value = items[i];
              return (
                <input
                  key={value}
                  ref={inputRef}
                  name={name}
                  type="hidden"
                  value={value}
                />
              );
            })}
          {children}
          {error && (
            <p id={`${resolvedId}-error`} className={errorClasses}>
              {error}
            </p>
          )}
        </div>
      </div>
    </SelectContextProvider>
  );
}
