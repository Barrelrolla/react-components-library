import { ComponentPropsWithoutRef } from "react";
import { getFooterLinksTitleClasses } from "./getFooterClasses";

const defaultType: Heading = "h3";
type Heading = "h1" | "h2" | "h3" | "h3" | "h4" | "h5" | "h6";
export type FooterLinksTitleProps<T extends Heading = typeof defaultType> = {
  /**
   * Heading element tag used to render the title for appropriate semantic structure.
   */
  as?: T;
} & ComponentPropsWithoutRef<T>;

/**
 * Section heading component for titling navigation groups within a `Footer`.
 *
 * Renders semantically as an `h3` by default, but accepts any heading tag (`h1`-`h6`)
 * via the `as` prop to maintain correct document heading hierarchy.
 */
export function FooterLinksTitle({
  as,
  className,
  children,
  ...rest
}: { className?: string } & FooterLinksTitleProps<typeof defaultType>) {
  const { classes } = getFooterLinksTitleClasses({ className });
  const Element = as ? as : defaultType;
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
