import { ComponentProps } from "react";
import { usePopoverContext } from "./PopoverContext";
import { getPopoverClasses } from "./getPopoverClasses";
import { FloatingElementContent } from "../Floating";

/**
 * Surface container for popover body content.
 *
 * Delegates layout, elevation, and positioning styles to the underlying
 * `FloatingElementContent` wrapper while accepting standard HTML `div` attributes.
 */
export function PopoverContent({ ...rest }: ComponentProps<"div">) {
  const context = usePopoverContext();
  if (!context) {
    throw new Error(
      "Please use the Popover Content only inside a Popover component!",
    );
  }

  const ariaLabel = rest["aria-label"];
  const ariaDescribed = rest["aria-describedby"];
  if (!ariaLabel && !ariaDescribed) {
    console.warn(
      "Provide an aria-label describing the purpose of the popover.",
    );
  }

  return (
    <FloatingElementContent
      context={context}
      getClasses={getPopoverClasses}
      {...rest}
    />
  );
}
