import { twMerge } from "tailwind-merge";

export function getInputClasses({
  startIcon,
  endIcon,
  className,
  wrapperClassName,
  labelClassName,
  errorClassName,
  inputContainerClassName,
}: {
  startIcon: boolean;
  endIcon: boolean;
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  inputContainerClassName?: string;
}) {
  return {
    classes: twMerge(
      "input-field",
      startIcon && "rounded-l-none ps-7",
      endIcon && "rounded-r-none ps-2 pe-7",
      className,
    ),
    wrapperClasses: twMerge("input-field-wrapper", wrapperClassName),
    labelClasses: twMerge("input-field-label", labelClassName),
    errorClasses: twMerge("input-field-error", errorClassName),
    inputContainerClasses: twMerge(
      "input-field-container",
      inputContainerClassName,
    ),
  };
}
