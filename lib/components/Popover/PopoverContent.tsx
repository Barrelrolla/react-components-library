import { ComponentProps } from "react";
import { usePopoverContext } from "./PopoverContext";
import { getPopoverClasses } from "./getPopoverClasses";
import { FloatingElementContent } from "../Floating";

type PopoverContentProps = {
  /** CSS classnames that will be applied to the backdrop. */
  backdropClasses?: string;
} & ComponentProps<"div">;

/**
 * Surface container for popover body content.
 *
 * Delegates layout, elevation, and positioning styles to the underlying
 * `FloatingElementContent` wrapper while accepting standard HTML `div` attributes.
 */
export function PopoverContent({
  backdropClasses,
  ...rest
}: PopoverContentProps) {
  const context = usePopoverContext();
  if (!context) {
    throw new Error(
      "Please use the Popover Content only inside a Popover component!",
    );
  }

  const ariaLabel = rest["aria-label"];
  const ariaLabeledBy = rest["aria-labelledby"];
  if (!ariaLabel && !ariaLabeledBy) {
    console.warn(
      "Provide an aria-label describing the purpose of the popover.",
    );
  }

  return (
    <FloatingElementContent
      context={context}
      backdropClasses={backdropClasses}
      getClasses={getPopoverClasses}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabeledBy}
      {...rest}
    />
  );
}
