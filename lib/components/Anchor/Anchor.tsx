import { ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getAnchorClasses } from "./getAnchorClasses";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  /** Color of the anchor element. */
  color?: ColorType;
  /** Adds underline. */
  underlined?: boolean;
  /** Adds underline on hover. */
  hoverUnderline?: boolean;
  /** Adds an offset to the underline on hover. */
  hoverUnderlineOffset?: boolean;
} & PolymorphicProps<E>;

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
