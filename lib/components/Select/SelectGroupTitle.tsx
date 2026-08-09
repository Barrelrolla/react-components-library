import { ComponentProps } from "react";
import { getSelectGroupTitleClasses } from "./getSelectClasses";

export function SelectGroupTitle({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  const { classes } = getSelectGroupTitleClasses({ className });
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}
