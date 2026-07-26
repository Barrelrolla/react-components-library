import { twMerge } from "tailwind-merge";

export function getPopoverClasses({ className }: { className?: string }) {
  return { classes: twMerge("popover", className) };
}
