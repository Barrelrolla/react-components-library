import { ComponentProps } from "react";
import { getSelectGroupTitleClasses } from "./getSelectClasses";

/**
 * Non-heading section label used to categorize or group option items within a select list.
 *
 * Renders as a styled `div` element to provide visual organization for grouped choices
 * without cluttering the document's global heading hierarchy.
 */
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
