import { ComponentProps } from "react";
import { getDropdownTitleClasses } from "./getDropdownClasses";

export function DropdownTitle({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { classes } = getDropdownTitleClasses({ className });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
