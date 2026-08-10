import {
  ComponentProps,
  CSSProperties,
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
  items: string[];
  multiple?: boolean;
  name?: string;
  error?: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  initialSelectedIndex?: number | undefined;
  initialSelectedIndices?: number[];
  onSelectedIndexChange?: (index: number | undefined) => void;
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
  items,
  multiple = false,
  name,
  error,
  isOpen,
  onOpenChange,
  initialSelectedIndex,
  initialSelectedIndices,
  onSelectedIndexChange,
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
  const role = useRole(context, { role: "select" });
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

  let inputValue: string | string[] = "";
  if (multiple) {
    inputValue = [];
    for (let i = 0; i < selectedIndices.length; i++) {
      inputValue.push(items[selectedIndices[i]]);
    }
  } else if (selectedIndex !== undefined) {
    inputValue = items[selectedIndex];
  }

  let buttonText = placeholder;
  if (!multiple && selectedIndex !== undefined) {
    buttonText = items[selectedIndex];
  }

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
                  className="m-[3px] flex cursor-auto items-center gap-0.5 pr-0 pl-2 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {
                    <>
                      <span>{items[index]}</span>
                      <Button
                        useGropup={false}
                        variant="ghost"
                        radius="pill"
                        size="xs"
                        className="p-0"
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
            <div className="flex w-max flex-1 items-center justify-between">
              <button
                aria-hidden={true}
                disabled={disabled}
                tabIndex={-1}
                className="line-clamp-1 cursor-pointer px-3 py-1.5 text-left disabled:pointer-events-none disabled:opacity-50"
              >
                {buttonText}
              </button>
              <div className="flex items-center">
                {(selectedIndex !== undefined ||
                  selectedIndices.length > 0) && (
                  <Button
                    useGropup={false}
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
          {name && (
            <input
              ref={inputRef}
              name={name}
              type="hidden"
              value={inputValue}
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
