import { twMerge } from "tailwind-merge";

export function getTooltipClasses({ className }: { className?: string }) {
  return { classes: twMerge("tooltip", className) };
}
