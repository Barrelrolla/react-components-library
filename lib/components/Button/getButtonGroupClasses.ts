import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";

export function getButtonGroupClasses({
  variant,
  radius,
  vertical,
  className,
  wrapperClassName,
}: {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  vertical: boolean;
  className?: string;
  wrapperClassName?: string;
}) {
  const resolvedRadius = radius || "default";
  return {
    groupClasses: twMerge(
      "btn-group",
      variant === "outline" && "inset-ring inset-ring-(--bg-color)",
      vertical && "flex-col",
      resolvedRadius === "default" && "rounded-inputs",
      resolvedRadius === "pill" && "rounded-full",
      className,
    ),

    wrapperClasses: twMerge("flex", wrapperClassName),
  };
}
