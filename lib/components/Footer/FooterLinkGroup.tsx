import { ComponentProps } from "react";
import { getFooterLinkGroupClasses } from "./getFooterClasses";
import { Composite } from "@floating-ui/react";

/**
 * Structural container component used to group related navigation links together within a `Footer`.
 */
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
