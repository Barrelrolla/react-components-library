import { ComponentProps } from "react";

/**
 * List container that groups and organizes selectable option items within a select component.
 *
 * Renders semantically as an HTML `<ul>` element to structure dropdown option choices for
 * assistive technologies and keyboard navigation.
 */
export function SelectGroup({ children, ...rest }: ComponentProps<"ul">) {
  return <ul {...rest}>{children}</ul>;
}
