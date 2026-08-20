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
import { useFloatingTransitionStyles } from "@/hooks/useFloatingTransitionStyles";

export type PopoverProps = {
  /** Color variant applied to the popover card, arrow, and border elements. */
  color?: ColorType;
  /** Explicitly controls the open state of the popover. When omitted, the component operates in an uncontrolled state. */
  isOpen?: boolean;
  /** Callback fired when the popover open state changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Positioning strategy used to place the floating element relative to its trigger. Defaults to `"absolute"`. */
  strategy?: "absolute" | "fixed";
  /** Placement direction of the popover relative to its anchor trigger. */
  placement?: Placement;
  /** Delay in milliseconds before showing the popover on hover trigger interactions. */
  delay?: number;
  /** When `true`, requires explicit click interactions to toggle the popover instead of hover. */
  requireClick?: boolean;
  /** When `true`, renders a directional pointing arrow towards the reference anchor trigger. */
  hasArrow?: boolean;
  /** ARIA role for accessibility semantics (e.g., `"popover"`, `"dialog"`, `"tooltip"`). */
  role?: floatingRoles;
  /** Disables popover interactions and prevents it from opening. */
  disabled?: boolean;
} & PropsWithChildren;

export function PopoverComponent({
  color = "main",
  isOpen,
  onOpenChange,
  strategy = "absolute",
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
    strategy,
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
  const dismiss = useDismiss(context, { outsidePressEvent: "click" });
  const r = useRole(context, { role: role });
  const interactions = useInteractions([hover, click, focus, dismiss, r]);
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(
    data,
    hasArrow,
  );

  return (
    <FloatingNode id={nodeId}>
      <PopoverContextProvider
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
      </PopoverContextProvider>
    </FloatingNode>
  );
}

/**
 * Floating popover component that presents contextual content or interactive controls
 * positioned relative to a trigger element.
 *
 * Supports both controlled (via `isOpen` and `onOpenChange`) and uncontrolled
 * state management modes. Includes support for hover and click triggers, custom positioning strategies,
 * accessible ARIA roles, directional arrows, and color variants.
 */
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
