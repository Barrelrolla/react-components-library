import { twMerge } from "tailwind-merge";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { ButtonVariant } from "./buttonTypes";
import { ColorType } from "@/types";
import { ColorMap } from "@/util";

export function useButtonGroupDividerStyles(
  contrasting: boolean,
  variant: ButtonVariant,
  vertical: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
  dividerClasses?: string,
) {
  const group = useButtonGroupContext();

  const primary = ColorMap[primaryColor || group?.primaryColor || "black"];
  const secondary =
    ColorMap[secondaryColor || group?.secondaryColor || "white"];

  return twMerge(
    `bg-${primary.dark}`,
    contrasting && `dark:bg-${secondary.light}`,
    variant === "solid" && `bg-${secondary.light}`,
    variant === "solid" && contrasting && `dark:bg-${primary.dark}`,
    !vertical && "w-0.25",
    vertical && "h-0.25",
    "z-1",
    dividerClasses,
  );
}
