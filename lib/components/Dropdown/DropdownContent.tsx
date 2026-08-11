import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import { FloatingElementContent } from "../Floating";

/**
 * Surface container for dropdown menu items and contextual options.
 *
 * Wraps floating menu options by delegating layout, elevation, backdrop, and
 * positioning styles to the underlying `FloatingElementContent` base component.
 */
export function DropdownContent({ ...rest }: ComponentProps<"div">) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error(
      "Please use the Dropdown Content only inside a Dropdown component!",
    );
  }

  return <FloatingElementContent context={context} {...rest} />;
}
