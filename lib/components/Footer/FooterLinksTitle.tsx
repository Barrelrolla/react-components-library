import { ComponentProps } from "react";
import { getFooterLinksTitleClasses } from "./getFooterClasses";

export function FooterLinksTitle({
  className,
  children,
  ...rest
}: ComponentProps<"h3">) {
  const { classes } = getFooterLinksTitleClasses({ className });
  return (
    <h3 className={classes} {...rest}>
      {children}
    </h3>
  );
}
