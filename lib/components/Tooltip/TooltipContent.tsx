import { ComponentProps } from "react";
import { useTooltipContext } from "./TooltipContext";
import { getTooltipClasses } from "./getTooltipClasses";
import { FloatingElementContent } from "../Floating";

/**
 * Floating container component that renders the contextual text or popover body of a tooltip.
 *
 * Anchors relative to the trigger element and applies tooltip surface styling, elevation,
 * and directional positioning inherited from the parent `Tooltip` context.
 */
export function TooltipContent({ ...rest }: ComponentProps<"div">) {
  const context = useTooltipContext();
  if (!context) {
    throw new Error(
      "Please use the Tooltip Content only inside a Tooltip component!",
    );
  }

  return (
    <FloatingElementContent
      context={context}
      coloredArror
      getClasses={getTooltipClasses}
      {...rest}
    />
  );
}
