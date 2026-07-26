import { twMerge } from "tailwind-merge";

export function getDialogClasses({
  className,
  backdropClassName,
}: {
  className?: string;
  backdropClassName?: string;
}) {
  return {
    classes: twMerge("dialog", className),
    backdropClasses: twMerge("dialog-backdrop", backdropClassName),
  };
}
