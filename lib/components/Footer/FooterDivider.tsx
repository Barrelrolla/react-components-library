import { Divider, DividerProps } from "../Divider";
import { useFooterDivider } from "./getFooterClasses";

/**
 * Divider line specifically styled for use inside a `Footer`.
 *
 * Automatically inherits the parent footer's theme and color variant
 * to ensure visual consistency across section breaks.
 */
export function FooterDivider({ ...rest }: DividerProps) {
  const { resolvedColor } = useFooterDivider();
  return <Divider color={resolvedColor} {...rest} />;
}
