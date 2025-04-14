import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";
import { useTheme } from "@/contexts";
import { ColorType } from "@/types";
import { ColorMap } from "@/util";

export function useButtonGroupStyles(
  contrasting: boolean,
  variant: ButtonVariant,
  vertical: boolean,
  bordered: boolean,
  radius: ButtonRadius,
  divider: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
  className?: string,
  dividerClasses?: string,
) {
  const theme = useTheme();

  const primary = ColorMap[primaryColor || theme?.primaryColor || "black"];
  const secondary =
    ColorMap[secondaryColor || theme?.secondaryColor || "white"];

  const groupStyles = twMerge(
    `flex text-${primary.dark}`,
    contrasting && `dark:text-${secondary.light}`,
    !vertical && "-space-x-0.25",
    vertical && "flex-col -space-y-0.25",
    bordered && "border",
    radius === "default" && "rounded",
    radius === "pill" && "rounded-full",
    className,
  );

  const dividerStyles = divider
    ? twMerge(
        `bg-${primary.dark}`,
        contrasting && `dark:bg-${secondary.light}`,
        variant === "solid" && `bg-${secondary.light}`,
        variant === "solid" && contrasting && `dark:bg-${primary.dark}`,
        !vertical && "w-0.25",
        vertical && "h-0.25",
        "z-1",
        dividerClasses,
      )
    : "";

  return {
    groupStyles,
    dividerStyles,
  };
}
