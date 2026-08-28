import { twMerge } from "tailwind-merge";
import { ButtonGroupContextType } from "../Button";
import { ColorType, SizeType } from "@/types";
import { getGropuedItemClasses } from "../Button/getButtonGroupClasses";

export function getInputClasses({
  color,
  size,
  revealingButton,
  disabled,
  startIcon,
  endIcon,
  className,
  wrapperClassName,
  labelClassName,
  errorClassName,
  inputContainerClassName,
  group,
}: {
  color: ColorType | undefined;
  size?: SizeType;
  revealingButton?: boolean;
  disabled?: boolean;
  startIcon: boolean;
  endIcon: boolean;
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  inputContainerClassName?: string;
  group?: ButtonGroupContextType;
}) {
  const inGroup = group !== null;
  const resolvedRadius = group?.radius || "default";
  const resolvedColor = color || group?.color || "primary";

  return {
    classes: twMerge(
      "input-field",
      startIcon && "rounded-l-none ps-7",
      (revealingButton || endIcon) && "rounded-r-none pe-7",
      className,
    ),
    wrapperClasses: twMerge(
      "input-field-wrapper",
      inGroup && "group/btn",
      wrapperClassName,
    ),
    labelClasses: twMerge(
      "input-field-label",
      disabled && "opacity-70",
      labelClassName,
    ),
    errorClasses: twMerge("input-field-error", errorClassName),
    inputContainerClasses: twMerge(
      "input-field-container",
      !inGroup && "rounded-inputs focus-within:inset-ring-1",
      !inGroup && !disabled && "border-inputs focus-within:border-(--bg-color)",
      !inGroup && `input-${size || "md"}`,
      inGroup &&
        getGropuedItemClasses({
          vertical: group?.vertical ?? false,
          radius: resolvedRadius,
          variant: group?.variant,
        }),
      inGroup && `input-${group?.size || "md"}`,
      inGroup && `input-${group?.variant || "solid"}`,
      inputContainerClassName,
    ),
    resolvedColor,
  };
}
