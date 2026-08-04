import { twMerge } from "tailwind-merge";

export function getSelectClasses({
  isOpen,
  isMounted,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
}: {
  isOpen?: boolean;
  isMounted?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
}) {
  return {
    classes: twMerge("select", (isOpen || isMounted) && "ring-1", className),
    labelClasses: twMerge("select-label", labelClassName),
    errorClasses: twMerge("select-error", errorClassName),
    caretClasses: twMerge(
      isOpen ? "rotate-180" : "rotate-0",
      "transition-transform",
    ),
    wrapperClasses: twMerge("select-wrapper", wrapperClassName),
  };
}

export function getSelectOptionClasses({ className }: { className?: string }) {
  return { classes: twMerge("select-option", className) };
}
