import { ComponentProps } from "react";
import { getFooterLinkGroupClasses } from "./getFooterClasses";

export function FooterLinkGroup({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { classes } = getFooterLinkGroupClasses({ className });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
