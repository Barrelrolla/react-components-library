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
import { CaretDownIcon } from "@/icons";

export type SelectProps = {
  inputRef?: Ref<HTMLInputElement>;
  color?: ColorType;
  label?: string;
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
} & ComponentProps<"button">;

export function Select({
  inputRef,
  color = "primary",
  label,
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ReactNode | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialSelectedValue,
  );
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

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

  const { classes, labelClasses, errorClasses, caretClasses, wrapperClasses } =
    getSelectClasses({
      isOpen: open,
      isMounted,
      className,
      labelClassName,
      errorClassName,
      wrapperClassName,
    });

  function setSelected(value: string | undefined) {
    setSelectedValue(value);
    setOpen(false);
    if (onSelectedValueChange) {
      onSelectedValueChange(value);
    }
  }

  const id = useId();
  const resolvedColor = error ? "error" : color;

  return (
    <SelectContextProvider
      value={{
        useFocus: true,
        color: color,
        isOpen: disabled ? false : isMounted,
        setIsOpen: disabled ? () => {} : setOpen,
        activeIndex,
        setActiveIndex,
        selectedIndex,
        setSelectedIndex,
        selectedValue,
        setSelectedValue: setSelected,
        selectedItem,
        setSelectedItem,
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
      >
        {label && (
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
        )}
        <button
          id={id}
          aria-label={!label ? "Select" : undefined}
          tabIndex={0}
          type="button"
          disabled={disabled}
          className={classes}
          data-error={error ? true : undefined}
          aria-describedby={id && error ? `${id}-error` : undefined}
          ref={context.refs.setReference}
          {...interactions.getReferenceProps()}
          {...rest}
        >
          {selectedItem ?? placeholder}
          <CaretDownIcon className={caretClasses} />
        </button>
        {name && (
          <input
            ref={inputRef}
            name={name}
            type="hidden"
            value={selectedValue ?? ""}
          />
        )}
        {children}
        {error && (
          <p id={`${id}-error`} className={errorClasses}>
            {error}
          </p>
        )}
      </div>
    </SelectContextProvider>
  );
}
