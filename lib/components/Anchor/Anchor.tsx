import { ColorType, PolymorphicProps } from "@/types";
import { ColorMap } from "@/util/colors";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

const defaultType = "a";
type AnchorProps<E extends ElementType> = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  contrasting?: boolean;
  selected?: boolean;
  disableUnderline?: boolean;
} & PolymorphicProps<E>;

export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  primaryColor,
  secondaryColor,
  contrasting = true,
  disableUnderline,
  selected,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  const classes = twMerge(
    "rounded text-inherit outline-inherit",
    !disableUnderline &&
      "underline underline-offset-3 outline-offset-4 transition-[text-underline-offset] hover:underline-offset-2 focus-visible:outline-2",
    !disableUnderline && selected && "underline-offset-1",
    primaryColor &&
      `text-${ColorMap[primaryColor].darkShade} hover:text-${ColorMap[primaryColor].darkHighlightedShade} focus-visible:text-${ColorMap[primaryColor].darkHighlightedShade} active:text-${ColorMap[primaryColor].darkActiveShade}`,
    contrasting &&
      secondaryColor &&
      `dark:text-${ColorMap[secondaryColor].lightShade} dark:hover:text-${ColorMap[secondaryColor].lightHighlightedShade} dark:focus-visible:text-${ColorMap[secondaryColor].lightHighlightedShade} dark:active:text-${ColorMap[secondaryColor].lightActiveShade}`,
    className,
  );
  const Element = as || defaultType;
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
