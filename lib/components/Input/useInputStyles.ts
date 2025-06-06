import { twMerge } from "tailwind-merge";

export function useInputStyles({
  bgFill,
  startIcon,
  endIcon,
  className,
  wrapperClasses,
  labelClasses,
  errorClasses,
  inputContainerClasses,
}: {
  bgFill?: boolean;
  startIcon: boolean;
  endIcon: boolean;
  className?: string;
  wrapperClasses?: string;
  labelClasses?: string;
  errorClasses?: string;
  inputContainerClasses?: string;
}) {
  return {
    styles: twMerge(
      "input-field",
      startIcon && "rounded-l-none ps-7",
      endIcon && "rounded-r-none pe-7 ps-2",
      className,
    ),
    wrapperStyles: twMerge("input-field-wrapper", wrapperClasses),
    labelStyles: twMerge("input-field-label", labelClasses),
    errorStyles: twMerge("input-field-error", errorClasses),
    inputContainerStyles: twMerge(
      "input-field-container",
      bgFill && "bg-(--bg-color)/50",
      inputContainerClasses,
    ),
  };
}
