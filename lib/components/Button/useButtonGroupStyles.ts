import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";

export function useButtonGroupStyles({
  variant,
  radius,
  vertical,
  className,
  wrapperClasses,
}: {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  vertical: boolean;
  className?: string;
  wrapperClasses?: string;
}) {
  const resolvedRadiues = radius || "default";
  return {
    groupStyles: twMerge(
      "btn-group",
      variant === "outline" && "inset-ring inset-ring-(--bg-color)",
      vertical && "flex-col",
      resolvedRadiues === "default" && "rounded-inputs",
      resolvedRadiues === "pill" && "rounded-full",
      className,
    ),

    wrapperStyles: twMerge("flex", wrapperClasses),
  };
}
