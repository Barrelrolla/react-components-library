import { twMerge } from "tailwind-merge";
import { ColorType } from "@/types";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";

export function useButtonGroupStyles({
  color = "primary",
  variant = "solid",
  radius,
  vertical,
  divider,
  className,
  dividerClasses,
  wrapperClasses,
}: {
  color?: ColorType;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  vertical: boolean;
  divider: boolean;
  className?: string;
  dividerClasses?: string;
  wrapperClasses?: string;
}) {
  const resolvedRadiues = radius || "default";
  const groupStyles = twMerge(
    "btn-group",
    variant === "outline" && "inset-ring inset-ring-(--bg-color)",
    vertical && "flex-col",
    resolvedRadiues === "default" && "rounded-inputs",
    resolvedRadiues === "pill" && "rounded-full",
    className,
  );

  const dividerStyles = divider
    ? twMerge(
        "bg-(--bg-color)",
        variant === "solid" && "bg-(--fg-color)",
        !vertical && "w-[0.1rem]",
        vertical && "h-[0.1rem]",
        "z-1",
        dividerClasses,
      )
    : "";

  const wrapperStyles = twMerge("flex", wrapperClasses);

  return {
    groupStyles,
    dividerStyles,
    wrapperStyles,
    resolvedColor: color,
  };
}
