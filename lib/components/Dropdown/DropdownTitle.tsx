import { ComponentProps } from "react";
import { useDropdownTitleStyles } from "./useDropdownStyles";

export function DropdownTitle({
  className,
  children,
  ...rest
}: ComponentProps<"h3">) {
  const { classes } = useDropdownTitleStyles({ className });
  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
}
