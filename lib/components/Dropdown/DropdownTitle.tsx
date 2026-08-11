import { ComponentProps } from "react";
import { getDropdownTitleClasses } from "./getDropdownClasses";

/**
 * Non-heading label or header element used to visually group options within a dropdown menu.
 *
 * Renders as a styled `div` rather than a semantic heading element to maintain clean document
 * structure while providing descriptive section labels across menu items.
 */
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
