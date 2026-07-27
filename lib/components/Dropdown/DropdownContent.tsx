import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import { getDropdownContentClasses } from "./getDropdownClasses";
import { FloatingElementContent } from "../Floating";

export function DropdownContent({
  ...rest
}: ComponentProps<"div">) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error(
      "Please use the Dropdown Content only inside a Dropdown component!",
    );
  }

  return <FloatingElementContent context={context} getClasses={getDropdownContentClasses} {...rest} />
}
