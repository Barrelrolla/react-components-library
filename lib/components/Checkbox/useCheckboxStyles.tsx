import { twMerge } from "tailwind-merge";

export function useCheckboxStyles({
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
      "checkbox opacity-0 peer-checked:opacity-100",
      className,
    ),
    unCheckedClasses: twMerge("checkbox", className),
    labelClass: twMerge("ml-(--size) text-(--fg-color)", labelClasses),
    wrapperClass: twMerge("checkbox-wrapper", wrapperClasses),
  };
}
