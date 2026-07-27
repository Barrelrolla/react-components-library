import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ColorType, MobileSheetPlacementType } from "@/types";
import { DropdownContextProvider, useDropdownContext } from "./DropdownContext";
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
} from "@floating-ui/react";
import { useIsMobile } from "@/hooks";
import { useFloatingTransitionStyles } from "@/hooks/useFloatingTransitionStyles";

export type DropdownProps = {
  color?: ColorType;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: Placement;
  hasArrow?: boolean;
  requireClick?: boolean;
  returnFocus?: boolean | null;
  disabled?: boolean;
  mobileSheet?: boolean;
  mobileSheetPlacement?: MobileSheetPlacementType;
} & PropsWithChildren;

export function DropdownComponent({
  color = "main",
  isOpen,
  onOpenChange,
  placement = "top",
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
      offset(isNested ? 4 : 10),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
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
  const dismiss = useDismiss(context, { bubbles: true });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const interactions = useInteractions([hover, click, role, dismiss, listNav]);
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(data, mobileSheet, mobileSheetPlacement);

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
          color,
          isOpen: disabled ? false : isMounted,
          setIsOpen: disabled ? () => { } : setOpen,
          isNested,
          activeIndex,
          setActiveIndex,
          hasFocusInside,
          setHasFocusInside,
          getItemProps: interactions.getItemProps,
          interactions,
          data,
          transitionStyles,
          listRef,
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

export function Dropdown(props: DropdownProps) {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <DropdownComponent {...props} />
      </FloatingTree>
    );
  }

  return <DropdownComponent {...props} />;
}
