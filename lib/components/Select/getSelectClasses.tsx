import { twMerge } from "tailwind-merge";
import { ButtonGroupContextType } from "../Button";
import { ColorType } from "@/types";
import { getGropuedItemClasses } from "../Button/getButtonGroupClasses";

export function getSelectClasses({
  color,
  isOpen,
  isMounted,
  disabled,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
  group,
}: {
  color?: ColorType;
  isOpen?: boolean;
  isMounted?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
  group?: ButtonGroupContextType;
}) {
  const inGroup = group !== null;
  const resolvedRadius = group?.radius || "default";
  const resolvedColor = color || group?.color || "primary";

  return {
    classes: twMerge(
      "select",
      isMounted && "border-(--bg-color) ring ring-(--bg-color)",
      !inGroup && "rounded-inputs",
      inGroup &&
        getGropuedItemClasses(group?.vertical ?? false, resolvedRadius),
      className,
    ),
    labelClasses: twMerge(
      "select-label",
      disabled && "opacity-70",
      labelClassName,
    ),
    errorClasses: twMerge("select-error", errorClassName),
    caretClasses: twMerge(
      "mr-3 inline h-4",
      isOpen ? "rotate-180" : "rotate-0",
      "transition-transform",
    ),
    wrapperClasses: twMerge(
      "select-wrapper",
      inGroup && "group",
      isMounted && "text-(--bg-color)",
      wrapperClassName,
    ),
    resolvedColor,
  };
}

export function getSelectOptionClasses({
  className,
  isMobile,
  mobileSheet,
}: {
  className?: string;
  isMobile: boolean;
  mobileSheet: boolean;
}) {
  return {
    classes: twMerge(
      "floating-list-item",
      isMobile && mobileSheet && "p-3 sm:p-1",
      (!isMobile || !mobileSheet) && "p-1",
      className,
    ),
  };
}

export function getSelectGroupTitleClasses({
  className,
}: {
  className?: string;
}) {
  return { classes: twMerge("floating-list-title", className) };
}
