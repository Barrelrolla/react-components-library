import { ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { cssColorProps, cssColorPropsReversed } from "@/util";
import { useAnchorStyles } from "./useAnchorStyles";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  color?: ColorType;
  underlined?: boolean;
  hoverUnderline?: boolean;
  hoverUnderlineOffset?: boolean;
  highlights?: boolean;
  transitions?: boolean;
  useBgColor?: boolean;
} & PolymorphicProps<E>;

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
