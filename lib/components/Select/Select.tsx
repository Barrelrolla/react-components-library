import {
  PropsWithChildren,
  ReactNode,
  useCallback,
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

export type SelectProps = {
  color?: ColorType;
  name?: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placeholder?: string;
  strategy?: "absolute" | "fixed";
  placement?: Placement;
  disabled?: boolean;
  mobileSheet?: boolean;
  mobileSheetPlacement?: MobileSheetPlacementType;
} & PropsWithChildren;

export function Select({
  color = "main",
  name,
  isOpen,
  onOpenChange,
  placeholder = "Select...",
  strategy = "absolute",
  placement = "bottom",
  mobileSheet = true,
  mobileSheetPlacement = "bottom",
  disabled,
  children,
}: SelectProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ReactNode | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
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

  return (
    <SelectContextProvider
      value={{
        useFocus: true,
        color,
        isOpen: disabled ? false : isMounted,
        setIsOpen: disabled ? () => {} : setOpen,
        activeIndex,
        setActiveIndex,
        selectedIndex,
        setSelectedIndex,
        selectedValue,
        setSelectedValue,
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
      <button
        tabIndex={0}
        type="button"
        className="select"
        ref={context.refs.setReference}
        {...interactions.getReferenceProps()}
      >
        {selectedItem ?? placeholder}
      </button>
      {name && <input name={name} type="hidden" value={selectedValue ?? ""} />}
      {children}
    </SelectContextProvider>
  );
}
