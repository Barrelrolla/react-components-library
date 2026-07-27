import { ComponentProps } from "react";
import { getFooterLinkGroupClasses } from "./getFooterClasses";
import { Composite } from "@floating-ui/react";

export function FooterLinkGroup({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { classes } = getFooterLinkGroupClasses({ className });
  return (
    <Composite>
      <div className={classes} {...rest}>
        {children}
      </div>
    </Composite>
  );
}
