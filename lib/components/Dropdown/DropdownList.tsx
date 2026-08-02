import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import { FloatingList } from "@floating-ui/react";
import { getDropdownListClasses } from "./getDropdownClasses";

export function DropdownList({
  className,
  children,
  ...rest
}: ComponentProps<"ul">) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List only inside a Dropdown!");
  }

  const { classes } = getDropdownListClasses({ className });
  return (
    <FloatingList elementsRef={context.listRef} labelsRef={context.labelsRef}>
      <menu className={classes} {...rest}>
        {children}
      </menu>
    </FloatingList>
  );
}
