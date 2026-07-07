import { twMerge } from "tailwind-merge";

export function useDialogStyles({
  className,
  backdropClasses,
}: {
  className?: string;
  backdropClasses?: string;
}) {
  return {
    styles: twMerge("dialog", className),
    backdropStyles: twMerge("dialog-backdrop", backdropClasses),
  };
}
