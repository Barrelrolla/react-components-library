import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { useAnchorStyles } from "./useAnchorStyles";
import { ColorType, PolymorphicProps } from "@/types";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  contrasting?: boolean;
  underlined?: boolean;
  hoverUnderline?: boolean;
  hoverUnderlineOffset?: boolean;
  highlights?: boolean;
  transitions?: boolean;
} & PolymorphicProps<E>;

export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  primaryColor,
  secondaryColor,
  contrasting = true,
  underlined = true,
  hoverUnderline = true,
  hoverUnderlineOffset = true,
  selectedUnderline = true,
  selectedUnderlineOffset = true,
  highlights = true,
  transitions = true,
  selected = false,
  selectedClasses,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  const classes = twMerge(
    useAnchorStyles(
      contrasting,
      highlights,
      underlined,
      hoverUnderline,
      hoverUnderlineOffset,
      transitions,
      primaryColor,
      secondaryColor,
    ),
    className,
  );

  const Element = as || defaultType;

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
