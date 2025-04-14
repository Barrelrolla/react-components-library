import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType } from "@/types";
import { ColorMap } from "@/util";

export function useAnchorStyles(
  contrasting: boolean,
  highlights: boolean,
  underlined: boolean,
  hoverUnderline: boolean,
  hoverUnderlineOffset: boolean,
  transitions: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
) {
  const theme = useTheme();
  const primary =
    ColorMap[primaryColor || theme?.linksPrimaryColor || "primary"];
  const secondary =
    ColorMap[secondaryColor || theme?.linksSecondaryColor || "primary"];

  const colors = twMerge(
    `text-${primary.dark} outline-${primary.darkHighlight}`,
    contrasting &&
      `dark:text-${secondary.light} dark:outline-${secondary.lightHighlight}`,
    highlights &&
      `hover:text-${primary.darkHighlight} focus-visible:text-${primary.darkHighlight} active:text-${primary.darkActive}`,
    highlights &&
      contrasting &&
      `dark:hover:text-${secondary.lightHighlight} dark:focus-visible:text-${secondary.lightHighlight} dark:active:text-${secondary.lightActive}`,
    "rounded outline-offset-4 focus-visible:outline-2",
    underlined && "underline",
    !hoverUnderlineOffset && "underline-offset-2",
    hoverUnderlineOffset && "underline-offset-3 hover:underline-offset-2",
    !underlined && hoverUnderline && "hover:underline",
    theme?.transitions && transitions && "transition-basic",
  );

  return colors;
}
