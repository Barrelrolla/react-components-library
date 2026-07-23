import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { ColorType, floatingRoles } from "@/types";
import { DropdownContextProvider } from "./DropdownContext";
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
  useFocus,
  useHover,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";

export type DropdownProps = {
  color?: ColorType;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: Placement;
  hasArrow?: boolean;
  requireClick: boolean;
  role?: floatingRoles;
  disabled?: boolean;
} & PropsWithChildren;

export function DropdownComponent({
  color = "main",
  isOpen,
  onOpenChange,
  placement = "top",
  hasArrow = true,
  requireClick = true,
  role = "menu",
  disabled,
  children,
}: DropdownProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const arrowRef = useRef(null);
  const nodeId = useFloatingNodeId();
  const data = useFloating({
    nodeId,
    placement,
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
  });

  const listRef = useRef<(HTMLElement | null)[]>([]);
  const context = data.context;
  const hover = useHover(context, {
    enabled: !requireClick,
    move: false,
    handleClose: safePolygon(),
  });
  const click = useClick(context, { enabled: requireClick });
  const focus = useFocus(context, {
    enabled: !requireClick,
    visibleOnly: true,
  });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    nested: true,
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
  });
  const r = useRole(context, { role: role });
  const interactions = useInteractions([
    hover,
    click,
    focus,
    dismiss,
    listNav,
    r,
  ]);

  return (
    <FloatingNode id={nodeId}>
      <DropdownContextProvider
        value={{
          color,
          isOpen: disabled ? false : open,
          setIsOpen: disabled ? () => {} : setOpen,
          data,
          interactions,
          listRef,
          activeIndex,
          hasArrow,
          arrowRef,
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
