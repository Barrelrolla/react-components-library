import { ComponentProps } from "react";
import { getFooterLinksSectionClasses } from "./getFooterClasses";
import { useFooterContext } from "./FooterContext";

/**
 * Section container designed to house and organize multiple `FooterLinkGroup` components in a structured layout.
 */
export function FooterLinksSection({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const footerContext = useFooterContext();
  const { classes } = getFooterLinksSectionClasses({
    className,
    footerContext,
  });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
