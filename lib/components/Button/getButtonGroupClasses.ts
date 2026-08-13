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
      !vertical && size === "xs" && "h-[1.5rem]",
      !vertical && size === "sm" && "h-[2rem]",
      !vertical && size === "md" && "h-10",
      !vertical && size === "lg" && "h-[3rem]",
      !vertical && size === "xl" && "h-[3.5rem]",
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
    !vertical &&
      radius === "default" &&
      "group-first:rounded-l-(--radius-inputs) group-last:rounded-r-(--radius-inputs)",
    !vertical &&
      radius === "pill" &&
      "group-first:rounded-l-full group-last:rounded-r-full",
    !vertical &&
      variant === "outline" &&
      "border-y border-(--bg-color) group-first:border-l group-last:border-r",
    vertical &&
      radius === "default" &&
      "group-first:rounded-t-(--radius-inputs) group-last:rounded-b-(--radius-inputs)",
    vertical &&
      radius === "pill" &&
      "group-first:rounded-t-full group-last:rounded-b-full",
    vertical &&
      variant === "outline" &&
      "border-x border-(--bg-color) group-first:border-t group-last:border-b",
  );
}
