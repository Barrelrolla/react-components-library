import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { ColorType, PolymorphicProps } from "@/types";
import { ColorMap } from "@/util/colors";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  contrasting?: boolean;
  underlined?: boolean;
  hoverUnderline?: boolean;
  selectedUnderline?: boolean;
  highlights?: boolean;
  transitions?: boolean;
  selected?: boolean;
} & PolymorphicProps<E>;

export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  primaryColor = "primary",
  secondaryColor = "primary",
  contrasting = true,
  underlined = true,
  hoverUnderline = true,
  selectedUnderline = true,
  highlights = true,
  transitions = true,
  selected = false,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  let classes = twMerge(
    "rounded underline-offset-3 outline-offset-4 hover:underline-offset-2 focus-visible:outline-2",
    `text-${ColorMap[primaryColor].dark} outline-${ColorMap[primaryColor].darkHighlight}`,
    contrasting &&
      `dark:text-${ColorMap[secondaryColor].light} dark:outline-${ColorMap[secondaryColor].lightHighlight}`,
    highlights &&
      `hover:text-${ColorMap[primaryColor].darkHighlight} focus-visible:text-${ColorMap[primaryColor].darkHighlight} active:text-${ColorMap[primaryColor].darkActive}`,
    highlights &&
      contrasting &&
      `dark:hover:text-${ColorMap[secondaryColor].lightHighlight} dark:focus-visible:text-${ColorMap[secondaryColor].lightHighlight} dark:active:text-${ColorMap[secondaryColor].lightActive}`,
    underlined && "underline",
    selected && "underline-offset-1",
    selectedUnderline && selected && "underline",
    !underlined && hoverUnderline && "hover:underline",
    transitions && "transition-basic",
    className,
  );

  const Element = as || defaultType;

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
