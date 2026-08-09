import {
  ComponentProps,
  CSSProperties,
  ReactNode,
  Ref,
  useCallback,
  useId,
  useRef,
  useState,
} from "react";
import { ColorType, MobileSheetPlacementType } from "@/types";
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
  inputRef?: Ref<HTMLInputElement>;
  color?: ColorType;
  label?: string;
  multiple?: boolean;
  name?: string;
  error?: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  initialSelectedValue?: string;
  onSelectedValueChange?: (value: string | undefined) => void;
  placeholder?: string;
  strategy?: "absolute" | "fixed";
  placement?: Placement;
  disabled?: boolean;
  mobileSheet?: boolean;
  mobileSheetPlacement?: MobileSheetPlacementType;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
} & ComponentProps<"div">;

export function Select({
  inputRef,
  id,
  color,
  label,
  multiple = false,
  name,
  error,
  isOpen,
  onOpenChange,
  initialSelectedValue,
  onSelectedValueChange,
  placeholder = "Select...",
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
  ...rest
}: SelectProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ReactNode | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialSelectedValue,
  );
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<ReactNode[]>([]);
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
  const role = useRole(context, { role: "select" });
  const dismiss = useDismiss(context, { bubbles: true });
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
    isOpen: open,
    isMounted,
    className,
    labelClassName,
    errorClassName,
    wrapperClassName,
    group,
  });

  function setSelected(value: string | undefined, item: ReactNode) {
    if (multiple && value) {
      const index = selectedValues.indexOf(value);
      let newValues = selectedValues;
      let newItems = selectedItems;
      if (index >= 0) {
        newValues = selectedValues.filter((_val, i) => i !== index);
        newItems = selectedItems.filter((_it, i) => i !== index);
      } else {
        newValues = [...selectedValues, value];
        newItems = [...selectedItems, item];
      }
      setSelectedValues(newValues);
      setSelectedItems(newItems);
    } else {
      setSelectedValue(value);
      setSelectedItem(item);
      setOpen(false);
    }
    if (onSelectedValueChange) {
      onSelectedValueChange(value);
    }
  }

  function clear() {
    setSelectedValue(undefined);
    setSelectedItem(null);
    setSelectedValues([]);
    setSelectedItems([]);
    setOpen(false);
  }

  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <SelectContextProvider
      value={{
        useFocus: true,
        color: resolvedColor,
        isOpen: disabled ? false : isMounted,
        setIsOpen: disabled ? () => {} : setOpen,
        activeIndex,
        setActiveIndex,
        selectedValue,
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
        selectedValues,
        multiple,
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
        <label htmlFor={resolvedId} className={labelClasses}>
          {label}
        </label>
        <div className="has-disabled:cursor-not-allowed">
          <div
            id={resolvedId}
            data-error={error ? true : undefined}
            aria-describedby={
              resolvedId && error ? `${resolvedId}-error` : undefined
            }
            aria-label={
              rest["aria-label"] ? rest["aria-label"] : label ? label : "Select"
            }
            className={classes}
            tabIndex={0}
            ref={context.refs.setReference}
            {...interactions.getReferenceProps()}
            {...rest}
          >
            {multiple &&
              selectedItems.map((item, index) => (
                <Badge className="flex items-center gap-0.5 py-0 pr-0 pl-2 text-xs">
                  {
                    <>
                      <span>{item}</span>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="h-4 p-0"
                        startIcon={<XIcon className="size-3.5" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(selectedValues[index], item);
                        }}
                      />
                    </>
                  }
                </Badge>
              ))}
            <button
              aria-hidden={true}
              disabled={disabled}
              tabIndex={-1}
              className="flex h-max w-max flex-1 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
            >
              {!multiple && (selectedItem ?? placeholder)}
              {multiple && placeholder}
            </button>
            <div className="flex items-center">
              {(selectedValue !== undefined || selectedValues.length > 0) && (
                <Button
                  size="xs"
                  variant="ghost"
                  color={isFocused || isMounted ? color : "main"}
                  className="flex h-4 cursor-pointer items-center overflow-clip p-0"
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
          {name && (
            <input
              ref={inputRef}
              name={name}
              type="hidden"
              value={multiple ? selectedValues : selectedValue}
            />
          )}
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
