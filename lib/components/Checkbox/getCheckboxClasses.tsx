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
      "checkbox opacity-0 peer-checked:opacity-100 disabled:peer-checked:opacity-50",
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
      "ml-(--size) text-(--fg-color) peer-focus-visible:outline-none",
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
