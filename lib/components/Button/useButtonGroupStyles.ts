import { twMerge } from "tailwind-merge";
import { ButtonVariant } from "./buttonTypes";
import { InputRadius } from "@/types";

export function useButtonGroupStyles(
  variant: ButtonVariant,
  radius: InputRadius,
  vertical: boolean,
  divider: boolean,
  className?: string,
  dividerClasses?: string,
) {
  const groupStyles = twMerge(
    "flex items-center justify-center",
    variant === "outline" && "inset-ring inset-ring-(--bg-color)",
    vertical && "flex-col",
    radius === "small" && "rounded",
    radius === "full" && "rounded-full",
    className,
  );

  const dividerStyles = divider
    ? twMerge(
        "bg-(--bg-color)",
        variant === "solid" && "bg-(--fg-color)",
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
