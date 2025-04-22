import { twMerge } from "tailwind-merge";
import { ButtonVariant } from "./buttonTypes";
import { InputRadius } from "@/types";

export function useButtonGroupStyles(
  variant: ButtonVariant,
  radius: InputRadius,
  vertical: boolean,
  bordered: boolean,
  divider: boolean,
  className?: string,
  dividerClasses?: string,
) {
  const groupStyles = twMerge(
    "flex items-center justify-center",
    !vertical && "-space-x-0.25",
    vertical && "flex-col -space-y-0.25",
    bordered && "border-(--bg-color)",
    radius === "small" && "rounded",
    radius === "full" && "rounded-full",
    className,
  );

  const dividerStyles = divider
    ? twMerge(
        "bg-(--bg-color)",
        variant === "solid" && "bg-(--fg-color)",
        !vertical && "h-10/12 w-0.25",
        vertical && "h-0.25 w-11/12",
        "z-1",
        dividerClasses,
      )
    : "";

  return {
    groupStyles,
    dividerStyles,
  };
}
