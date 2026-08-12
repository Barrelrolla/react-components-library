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
import { useFloatingTransitionStyles } from "@/hooks/useFloatingTransitionStyles";

export type TooltipProps = {
  /** Color variant applied across the tooltip surface and optional directional arrow. */
  color?: ColorType;
  /** Controlled open state determining whether the tooltip overlay is visible. */
  isOpen?: boolean;
  /** Callback fired when the visibility state of the tooltip changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /** CSS positioning strategy used by Floating UI to render the tooltip overlay. Defaults to `"absolute"`. */
  strategy?: "absolute" | "fixed";
  /** Floating UI placement direction of the tooltip relative to its trigger element. */
  placement?: Placement;
  /** Delay in milliseconds before showing or hiding the tooltip on hover or focus. */
  delay?: number;
  /** When `true`, renders a directional pointing arrow anchoring the tooltip to its trigger element. */
  hasArrow?: boolean;
  /** When `true`, marks the tooltip content as an accessible form field label rather than a plain description. */
  isLabel?: boolean;
  /** Disables user interaction, preventing the tooltip from displaying on hover or focus. */
  disabled?: boolean;
} & PropsWithChildren;

/**
 * Floating informational popup that provides contextual details when hovering over or focusing a trigger element.
 *
 * Configures hover/focus delays, positioning strategies, custom color variants, and optional directional
 * arrows while managing accessible overlay behavior via Floating UI.
 */
export function Tooltip({
  color = "main",
  isOpen,
  onOpenChange,
  strategy = "absolute",
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
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    strategy,
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
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(data);

  const nodeId = useFloatingNodeId();

  return (
    <FloatingNode id={nodeId}>
      <TooltipContextProvider
        value={{
          useFocus: false,
          returnFocus: false,
          isNested: false,
          mobileSheet: false,
          color,
          isOpen: disabled ? false : isMounted,
          setIsOpen: disabled ? () => {} : setOpen,
          data,
          interactions,
          transitionStyles,
          hasArrow,
          arrowRef,
        }}
      >
        {children}
      </TooltipContextProvider>
    </FloatingNode>
  );
}
