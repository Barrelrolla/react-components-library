import { ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getAnchorClasses } from "./getAnchorClasses";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  /** Color variant of the anchor element. */
  color?: ColorType;
  /** Applies a permanent underline to the text. */
  underlined?: boolean;
  /** Applies an underline on hover. */
  hoverUnderline?: boolean;
  /** Adds vertical spacing/offset to the hover underline. */
  hoverUnderlineOffset?: boolean;
} & PolymorphicProps<E>;

/**
 * Simple polymorphic anchor element.
 *
 * Uses the primary color variant by default and supports customizable underline states.
 */
export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  color,
  underlined = false,
  hoverUnderline = true,
  hoverUnderlineOffset = true,
  className,
  style,
  children,
  ...rest
}: AnchorProps<E>) {
  const { classes, resolvedColor } = getAnchorClasses({
    underlined,
    hoverUnderline,
    hoverUnderlineOffset,
    color,
    className,
  });

  const Element = as || defaultType;

  return (
    <Element
      style={{ ...cssColorPropsReversed(resolvedColor), ...style }}
      className={classes}
      {...rest}
    >
      {children}
    </Element>
  );
}
