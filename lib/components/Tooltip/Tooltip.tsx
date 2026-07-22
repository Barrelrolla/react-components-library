import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { ColorType } from "@/types";
import { TooltipContextProvider } from "./TooltipContext";
import {
  arrow,
  autoUpdate,
  flip,
  FloatingNode,
  offset,
  Placement,
  safePolygon,
  shift,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";

export type TooltipProps = {
  color?: ColorType;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: Placement;
  delay?: number;
  hasArrow?: boolean;
  isLabel?: boolean;
  disabled?: boolean;
} & PropsWithChildren;

export function Tooltip({
  color = "main",
  isOpen,
  onOpenChange,
  placement = "top",
  delay = 300,
  hasArrow = true,
  isLabel,
  disabled,
  children,
}: TooltipProps) {
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
  const data = useFloating({
    placement,
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  });

  const { delay: groupDelay } = useDelayGroup(data.context);
  const context = data.context;
  const hover = useHover(context, {
    delay: groupDelay || { open: delay, close: 0 },
    move: false,
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: isLabel ? "label" : "tooltip" });
  const interactions = useInteractions([hover, focus, dismiss, role]);

  const nodeId = useFloatingNodeId();

  return (
    <FloatingNode id={nodeId}>
      <TooltipContextProvider
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
      </TooltipContextProvider>
    </FloatingNode>
  );
}
