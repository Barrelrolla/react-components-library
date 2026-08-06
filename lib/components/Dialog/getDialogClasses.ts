import { twMerge } from "tailwind-merge";

export function getDialogClasses({
  backdropClassName,
}: {
  className?: string;
  backdropClassName?: string;
}) {
  return {
    classes: "dialog",
    scrollArea: "max-h-[calc(100vh-2.2rem)] overflow-x-auto scrollbar-thin",
    backdropClasses: twMerge("dialog-backdrop", backdropClassName),
  };
}
