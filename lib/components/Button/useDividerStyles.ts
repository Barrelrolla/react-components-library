import { twMerge } from "tailwind-merge";
import { ButtonVariant } from "./buttonTypes";
import { useTheme } from "@/contexts";
import { ColorType } from "@/types";
import { ColorMap } from "@/util";

export function useDividerStyles(
  contrasting: boolean,
  variant: ButtonVariant,
  vertical: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
) {
  const theme = useTheme();

  const primary = ColorMap[primaryColor || theme?.primaryColor || "black"];
  const secondary =
    ColorMap[secondaryColor || theme?.secondaryColor || "white"];

  return twMerge(
    `bg-${primary.dark}`,
    contrasting && `dark:bg-${secondary.light}`,
    variant === "solid" && `bg-${secondary.light}`,
    variant === "solid" && contrasting && `dark:bg-${primary.dark}`,
    !vertical && "w-0.25",
    vertical && "h-0.25",
    "z-1",
  );
}
