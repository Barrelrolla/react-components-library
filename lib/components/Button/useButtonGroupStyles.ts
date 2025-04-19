import { twMerge } from "tailwind-merge";
import { ButtonVariantProps } from "./buttonTypes";

export function useButtonGroupStyles(
  { radius, variant }: ButtonVariantProps,
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
    bordered && "border border-(--bg-color)",
    radius === "default" && "rounded",
    radius === "pill" && "rounded-full",
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
