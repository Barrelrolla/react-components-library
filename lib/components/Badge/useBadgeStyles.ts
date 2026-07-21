import { twMerge } from "tailwind-merge";

export function useBadgeStyles({ className }: { className?: string }) {
  return {
    classes: twMerge("badge", className),
  };
}
