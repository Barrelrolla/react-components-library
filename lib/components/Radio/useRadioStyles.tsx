import { twMerge } from "tailwind-merge";

export function useRadioStyles({
  className,
  labelClasses,
  wrapperClasses,
}: {
  className?: string;
  labelClasses?: string;
  wrapperClasses?: string;
}) {
  return {
    checkedClasses: twMerge(
      "radio opacity-0 peer-checked:opacity-100",
      className,
    ),
    unCheckedClasses: twMerge("radio", className),
    labelClass: twMerge("ml-(--size) text-(--fg-color)", labelClasses),
    wrapperClass: twMerge("radio-wrapper", wrapperClasses),
  };
}
