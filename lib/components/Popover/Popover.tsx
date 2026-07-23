import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { ColorType, floatingRoles } from "@/types";
import { PopoverContextProvider } from "./PopoverContext";
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
  useDelayGroup,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";

export type PopoverProps = {
  color?: ColorType;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: Placement;
  delay?: number;
  requireClick?: boolean;
  hasArrow?: boolean;
  role?: floatingRoles;
  disabled?: boolean;
} & PropsWithChildren;

export function PopoverComponent({
  color = "main",
  isOpen,
  onOpenChange,
  placement = "top",
  delay = 300,
  hasArrow = true,
  requireClick = false,
  role,
  disabled,
  children,
}: PopoverProps) {
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

  const { delay: groupDelay } = useDelayGroup(data.context);
  const context = data.context;
  const hover = useHover(context, {
    enabled: !requireClick,
    delay: groupDelay || { open: delay, close: 0 },
    move: false,
    handleClose: safePolygon(),
  });
  const click = useClick(context, { enabled: requireClick });
  const focus = useFocus(context, { enabled: !requireClick });
  const dismiss = useDismiss(context);
  const r = useRole(context, { role: role });
  const interactions = useInteractions([hover, click, focus, dismiss, r]);
  return (
    <FloatingNode id={nodeId}>
      <PopoverContextProvider
        value={{
          color,
          isOpen: disabled ? false : open,
          setIsOpen: disabled ? () => {} : setOpen,
          data,
          interactions,
          hasArrow,
          arrowRef,
        }}
      >
        {children}
      </PopoverContextProvider>
    </FloatingNode>
  );
}

export function Popover(props: PopoverProps) {
  const parentId = useFloatingParentNodeId();
  if (parentId === null) {
    return (
      <FloatingTree>
        <PopoverComponent {...props} />
      </FloatingTree>
    );
  }

  return <PopoverComponent {...props} />;
}
