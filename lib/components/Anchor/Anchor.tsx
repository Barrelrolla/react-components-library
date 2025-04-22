import { ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { useAnchorStyles } from "./useAnchorStyles";
import { cssColorProps, cssColorPropsReversed } from "@/util/cssColorProps";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  color?: ColorType;
  underlined?: boolean;
  hoverUnderline?: boolean;
  hoverUnderlineOffset?: boolean;
  highlights?: boolean;
  transitions?: boolean;
} & PolymorphicProps<E>;

export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  color = "main",
  underlined = true,
  hoverUnderline = true,
  hoverUnderlineOffset = true,
  highlights = true,
  transitions = true,
  className,
  style,
  children,
  ...rest
}: AnchorProps<E>) {
  const { classes, resolvedColor } = useAnchorStyles(
    highlights,
    underlined,
    hoverUnderlineOffset,
    hoverUnderline,
    transitions,
    color,
    className,
  );

  const Element = as || defaultType;
  const styleVars =
    color === "main"
      ? cssColorProps(resolvedColor)
      : cssColorPropsReversed(resolvedColor);

  return (
    <Element style={{ ...styleVars, ...style }} className={classes} {...rest}>
      {children}
    </Element>
  );
}
