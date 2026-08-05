import { twMerge } from "tailwind-merge";

export function getCheckboxClasses({
  disabled,
  className,
  labelClassName,
  wrapperClassName,
}: {
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}) {
  return {
    checkedClasses: twMerge(
      "checkbox checkbox-checked",
      !disabled && "checkbox-highlights",
      className,
    ),
    unCheckedClasses: twMerge(
      "checkbox",
      !disabled && "checkbox-highlights",
      disabled && "opacity-50",
      className,
    ),
    labelClasses: twMerge(
      "checkbox-label",
      !disabled && "checkbox-highlights",
      disabled && "opacity-50",
      labelClassName,
    ),
    wrapperClasses: twMerge(
      "checkbox-wrapper",
      disabled && "cursor-not-allowed",
      wrapperClassName,
    ),
  };
}
