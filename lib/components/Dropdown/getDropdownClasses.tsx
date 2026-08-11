import { twMerge } from "tailwind-merge";

export function getDropdownTitleClasses({ className }: { className?: string }) {
  return { classes: twMerge("floating-list-title", className) };
}
