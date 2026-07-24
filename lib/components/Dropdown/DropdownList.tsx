import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import { FloatingList } from "@floating-ui/react";

export function DropdownList({ children, ...rest }: ComponentProps<"ul">) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List only inside a Dropdown!");
  }

  return (
    <FloatingList elementsRef={context.listRef}>
      <ul className="dropdown-list" {...rest}>
        {children}
      </ul>
    </FloatingList>
  );
}
