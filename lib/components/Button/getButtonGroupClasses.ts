import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";
import { SizeType } from "@/types";

export function getButtonGroupClasses({
  radius,
  size,
  vertical,
  className,
  dividerClassName,
  wrapperClassName,
}: {
  radius?: ButtonRadius;
  size?: SizeType;
  vertical: boolean;
  className?: string;
  dividerClassName?: string;
  wrapperClassName?: string;
}) {
  const resolvedRadius = radius || "default";
  return {
    groupClasses: twMerge(
      "btn-group",
      vertical && "flex-col",
      !vertical && "items-end",
      resolvedRadius === "default" && "rounded-inputs",
      resolvedRadius === "pill" && "rounded-full",
      className,
    ),
    dividerClasses: twMerge(
      !vertical && size === "xs" && "h-7.5",
      !vertical && size === "sm" && "h-8.5",
      !vertical && size === "md" && "h-10",
      !vertical && size === "lg" && "h-12",
      !vertical && size === "xl" && "h-14.5",
      dividerClassName,
    ),
    wrapperClasses: twMerge("flex", wrapperClassName),
  };
}

export function getGropuedItemClasses({
  vertical,
  radius,
  variant,
}: {
  vertical: boolean;
  radius: ButtonRadius;
  variant?: ButtonVariant;
}) {
  return twMerge(
    "group-btn:bg-red-500",
    !vertical &&
      radius === "default" &&
      "group-first/btn:rounded-l-(--radius-inputs) group-last/btn:rounded-r-(--radius-inputs)",
    !vertical &&
      radius === "pill" &&
      "group-first/btn:rounded-l-full group-last/btn:rounded-r-full",
    !vertical &&
      variant === "outline" &&
      "border-y border-(--bg-color) group-first/btn:border-l group-last/btn:border-r",
    vertical &&
      radius === "default" &&
      "group-first/btn:rounded-t-(--radius-inputs) group-last/btn:rounded-b-(--radius-inputs)",
    vertical &&
      radius === "pill" &&
      "group-first/btn:rounded-t-full group-last/btn:rounded-b-full",
    vertical &&
      variant === "outline" &&
      "border-x border-(--bg-color) group-first/btn:border-t group-last/btn:border-b",
  );
}
