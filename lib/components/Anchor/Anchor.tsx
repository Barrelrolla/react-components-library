import { CSSProperties, ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { useAnchorStyles } from "./useAnchorStyles";

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
  color,
  underlined = true,
  hoverUnderline = true,
  hoverUnderlineOffset = true,
  highlights = true,
  transitions = true,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  const classes = useAnchorStyles(
    highlights,
    underlined,
    hoverUnderlineOffset,
    hoverUnderline,
    transitions,
    className,
  );

  const Element = as || defaultType;

  return (
    <Element
      style={
        {
          "--fg-color": `var(--color-${color ?? "primary"})`,
        } as CSSProperties
      }
      className={classes}
      {...rest}
    >
      {children}
    </Element>
  );
}
