import { twMerge } from "tailwind-merge";
import { ButtonGroupContextType } from "../Button";
import { ColorType } from "@/types";
import { getGropuedItemClasses } from "../Button/getButtonGroupClasses";

export function getInputClasses({
  color,
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
      endIcon && "rounded-r-none ps-2 pe-7",
      className,
    ),
    wrapperClasses: twMerge(
      "input-field-wrapper",
      inGroup && "group",
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
      !inGroup && "rounded-inputs",
      inGroup &&
        getGropuedItemClasses(group?.vertical ?? false, resolvedRadius),
      inputContainerClassName,
    ),
    resolvedColor,
  };
}
