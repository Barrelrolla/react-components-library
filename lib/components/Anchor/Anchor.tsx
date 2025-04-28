import { ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { cssColorProps, cssColorPropsReversed } from "@/util";
import { useAnchorStyles } from "./useAnchorStyles";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  /** Color of the anchor element. Uses the content variant, unless specified otherwise with the `useBgColor` prop */
  color?: ColorType;
  /** Adds underline */
  underlined?: boolean;
  /** Adds underline on hover */
  hoverUnderline?: boolean;
  /** Adds an offset to the underline on hover */
  hoverUnderlineOffset?: boolean;
  /** By default there's a color change on hover and press, set to false if you want to disable it. */
  highlights?: boolean;
  /** Used to disable animations. */
  transitions?: boolean;
  /** Set to `true` if you want the anchor to use the main color, instead of the content one. */
  useBgColor?: boolean;
} & PolymorphicProps<E>;

/** Anchor element with a come customization */
export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  color,
  highlights = true,
  underlined = true,
  hoverUnderline = true,
  hoverUnderlineOffset = true,
  transitions = true,
  useBgColor = true,
  className,
  style,
  children,
  ...rest
}: AnchorProps<E>) {
  const { classes, resolvedColor } = useAnchorStyles({
    highlights,
    underlined,
    hoverUnderline,
    hoverUnderlineOffset,
    transitions,
    color,
    className,
  });

  const Element = as || defaultType;
  const styleVars = useBgColor
    ? cssColorPropsReversed(resolvedColor)
    : cssColorProps(resolvedColor);

  return (
    <Element style={{ ...styleVars, ...style }} className={classes} {...rest}>
      {children}
    </Element>
  );
}
