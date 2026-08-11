import { ComponentProps } from "react";
import { getFooterFullSectionClasses } from "./getFooterClasses";
import { useFooterContext } from "./FooterContext";

/**
 * Full-width section container within a `Footer`.
 *
 * Spans across the entire grid or layout container, making it ideal for multi-column
 * link groups, main navigation links, or primary branding content inside the footer.
 */
export function FooterFullSection({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const footerContext = useFooterContext();
  const { classes } = getFooterFullSectionClasses({ className, footerContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
