import { ComponentProps } from "react";
import { getDropdownTitleClasses } from "./getDropdownClasses";

export function DropdownTitle({
  className,
  children,
  ...rest
}: ComponentProps<"h3">) {
  const { classes } = getDropdownTitleClasses({ className });
  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
}
