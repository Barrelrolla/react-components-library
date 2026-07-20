import { twMerge } from "tailwind-merge";

export function useInputStyles({
  bgFill,
  startIcon,
  endIcon,
  validating,
  className,
  wrapperClasses,
  labelClasses,
  errorClasses,
  inputContainerClasses,
}: {
  bgFill?: boolean;
  startIcon: boolean;
  endIcon: boolean;
  validating: boolean;
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
      endIcon && "rounded-r-none ps-2 pe-7",
      className,
    ),
    wrapperStyles: twMerge("input-field-wrapper", wrapperClasses),
    labelStyles: twMerge("input-field-label", labelClasses),
    errorStyles: twMerge("input-field-error", errorClasses),
    inputContainerStyles: twMerge(
      "input-field-container",
      validating && "has-error:outline-1",
      bgFill && "muted-bg",
      inputContainerClasses,
    ),
  };
}
