import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import { FloatingList } from "@floating-ui/react";

/**
 * Menu list container that manages keyboard navigation and focus management across dropdown items.
 *
 * Renders semantically as a `<menu>` element and integrates with `FloatingList` to handle
 * arrow key focus traversal across nested `DropdownItem` options.
 */
export function DropdownList({ children, ...rest }: ComponentProps<"menu">) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List only inside a Dropdown!");
  }

  return (
    <FloatingList elementsRef={context.listRef} labelsRef={context.labelsRef}>
      <menu {...rest}>{children}</menu>
    </FloatingList>
  );
}
