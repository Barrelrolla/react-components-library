import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  arrow,
  autoUpdate,
  flip,
  FloatingNode,
  FloatingTree,
  offset,
  Placement,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import { useIsMobile, useFloatingTransitionStyles } from "@/hooks";
import { ColorType, MobileSheetPlacementType } from "@/types";
import { DropdownContextProvider, useDropdownContext } from "./DropdownContext";

export type DropdownProps = {
  /** Color variant of the dropdown menu. */
  color?: ColorType;
  /** Controls the open state when used as a controlled component. */
  isOpen?: boolean;
  /** Callback fired when the open state changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Positioning strategy for floating layout. Use `"fixed"` when inside fixed containers like navbars. */
  strategy?: "absolute" | "fixed";
  /** Alignment and positioning relative to the trigger element. */
  placement?: Placement;
  /** Displays a small pointing arrow indicator directed toward the trigger element. */
  hasArrow?: boolean;
  /** Restricts opening to click events only, disabling hover triggers. */
  requireClick?: boolean;
  /** Automatically shifts focus back to the trigger element when the dropdown closes. */
  returnFocus?: boolean | null;
  /** Prevents the dropdown from opening when set to `true`. */
  disabled?: boolean;
  /** Renders a mobile sheet interface instead of a floating dropdown on mobile viewports. */
  mobileSheet?: boolean;
  /** Positioning for the mobile sheet view. */
  mobileSheetPlacement?: MobileSheetPlacementType;
} & PropsWithChildren;

export function DropdownComponent({
  color = "primary",
  isOpen,
  onOpenChange,
  strategy = "absolute",
  placement = "bottom",
  hasArrow = true,
  requireClick = true,
  mobileSheet = true,
  returnFocus = null,
  mobileSheetPlacement = "bottom",
  disabled,
  children,
}: DropdownProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasFocusInside, setHasFocusInside] = useState(false);
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

  const isMobile = useIsMobile();
  const parent = useDropdownContext();
  const listRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);
  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const arrowRef = useRef(null);
  const isNested = parentId != null;

  const data = useFloating({
    nodeId,
    open: open,
    onOpenChange: setOpen,
    placement: isNested ? "right-start" : placement,
    middleware: [
      offset(isNested ? 0 : 10),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    strategy,
    whileElementsMounted: autoUpdate,
  });

  const { context } = data;
  const hover = useHover(context, {
    enabled: !requireClick || isNested,
    move: false,
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    enabled: requireClick || isMobile,
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, {
    bubbles: true,
    outsidePressEvent: "click",
  });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });
  const interactions = useInteractions([
    hover,
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

  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId, setOpen]);

  useEffect(() => {
    if (open && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, open, nodeId, parentId]);

  return (
    <FloatingNode id={nodeId}>
      <DropdownContextProvider
        value={{
          useFocus: true,
          color,
          isOpen: disabled ? false : isMounted,
          setIsOpen: disabled ? () => {} : setOpen,
          isNested,
          activeIndex,
          setActiveIndex,
          hasFocusInside,
          setHasFocusInside,
          interactions,
          data,
          transitionStyles,
          listRef,
          labelsRef,
          hasArrow,
          arrowRef,
          parent,
          mobileSheet,
          mobileSheetPlacement,
          returnFocus,
        }}
      >
        {children}
      </DropdownContextProvider>
    </FloatingNode>
  );
}

/**
 * Flexible dropdown menu component supporting both controlled and uncontrolled states.
 *
 * Features customizable positioning strategies, hover or click activation, focus management,
 * and optional mobile sheet transformations for responsive layouts.
 */
export function Dropdown(props: DropdownProps) {
  const parentId = useFloatingParentNodeId();
  const context = useDropdownContext();

  if (parentId === null) {
    return (
      <FloatingTree>
        <DropdownComponent {...props} />
      </FloatingTree>
    );
  }

  return <DropdownComponent {...props} color={context?.color} />;
}
