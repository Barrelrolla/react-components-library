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

export function getGropuedItemClasses(vertical: boolean, radius: ButtonRadius) {
  return twMerge(
    !vertical &&
      radius === "default" &&
      "group-first:rounded-l-(--radius-inputs) group-last:rounded-r-(--radius-inputs)",
    !vertical &&
      radius === "pill" &&
      "group-first:rounded-l-full group-last:rounded-r-full",
    vertical &&
      radius === "default" &&
      "group-first:rounded-t-(--radius-inputs) group-last:rounded-b-(--radius-inputs)",
    vertical &&
      radius === "pill" &&
      "group-first:rounded-t-full group-last:rounded-b-full",
  );
}
