import { twMerge } from "tailwind-merge";
import { ButtonGroupContextType } from "../Button";
import { ColorType, SizeType } from "@/types";
import { getGropuedItemClasses } from "../Button/getButtonGroupClasses";

export function getSelectClasses({
  color,
  size,
  isOpen,
  isMounted,
  disabled,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
  carretPadding,
  group,
}: {
  color?: ColorType;
  size?: SizeType;
  isOpen?: boolean;
  isMounted?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
  carretPadding?: boolean;
  group?: ButtonGroupContextType;
}) {
  const inGroup = group !== null;
  const resolvedRadius = group?.radius || "default";
  const resolvedColor = color || group?.color || "primary";

  return {
    classes: twMerge(
      "input-field-container flex-wrap has-disabled:pointer-events-none has-disabled:select-none",
      !inGroup &&
        !disabled &&
        !isMounted &&
        "border-inputs focus-within:border-(--bg-color)",
      isMounted &&
        "border border-(--bg-color) inset-ring-1 inset-ring-(--bg-color)",
      !inGroup && "rounded-inputs focus-within:inset-ring-1",
      !inGroup && `input-${size || "md"}`,
      inGroup &&
        getGropuedItemClasses({
          vertical: group?.vertical ?? false,
          radius: resolvedRadius,
          variant: group?.variant,
        }),
      inGroup && `input-${group?.size || "md"}`,
      inGroup && `input-${group?.variant || "solid"}`,
      className,
    ),
    labelClasses: twMerge(
      "select-label",
      disabled && "opacity-70",
      labelClassName,
    ),
    errorClasses: twMerge("select-error", errorClassName),
    caretClasses: twMerge(
      carretPadding && "mr-3",
      isOpen ? "rotate-180" : "rotate-0",
      "transition-transform",
    ),
    wrapperClasses: twMerge(
      "select-wrapper",
      inGroup && "group/btn",
      isMounted && "text-(--bg-color)",
      wrapperClassName,
    ),
    resolvedColor,
  };
}

export function getSelectGroupTitleClasses({
  className,
}: {
  className?: string;
}) {
  return { classes: twMerge("floating-list-title", className) };
}
