import { twMerge } from "tailwind-merge";
import { ButtonGroupContextType } from "../Button";
import { ColorType } from "@/types";
import { getGropuedItemClasses } from "../Button/getButtonGroupClasses";

export function getSelectClasses({
  color,
  isOpen,
  isMounted,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
  group,
}: {
  color?: ColorType;
  isOpen?: boolean;
  isMounted?: boolean;
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
      (isOpen || isMounted) && "border-(--bg-color) ring ring-(--bg-color)",
      !inGroup && "rounded-inputs",
      inGroup &&
        getGropuedItemClasses(group?.vertical ?? false, resolvedRadius),
      className,
    ),
    labelClasses: twMerge("select-label", labelClassName),
    errorClasses: twMerge("select-error", errorClassName),
    caretClasses: twMerge(
      isOpen ? "rotate-180" : "rotate-0",
      "transition-transform",
    ),
    wrapperClasses: twMerge(
      "select-wrapper",
      inGroup && "group",
      (isOpen || isMounted) && "text-(--bg-color)",
      wrapperClassName,
    ),
    resolvedColor,
  };
}

export function getSelectOptionClasses({ className }: { className?: string }) {
  return { classes: twMerge("select-option", className) };
}
