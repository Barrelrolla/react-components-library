import { ReactElement } from "react";
import { useTooltipContext } from "./TooltipContext";
import { Slot } from "../Slot/Slot";

/**
 * Anchor component that wraps the target element responsible for triggering the tooltip.
 *
 * Clones its single child element to attach event listeners (hover, focus, touch) and
 * accessibility attributes (ARIA labels, describedby) managed by the parent `Tooltip` context.
 */
export function TooltipTrigger({ children }: { children: ReactElement }) {
  const context = useTooltipContext();
  if (!context) {
    throw new Error(
      "Please use the Tooltip Trigger only inside a Tooltip component!",
    );
  }

  return (
    <Slot
      {...context.interactions.getReferenceProps()}
      ref={context.data.refs.setReference}
    >
      {children}
    </Slot>
  );
}
