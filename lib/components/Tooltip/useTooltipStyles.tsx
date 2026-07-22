import { twMerge } from "tailwind-merge";

export function useTooltipStyles({ className }: { className?: string }) {
  return { classes: twMerge("tooltip", className) };
}
