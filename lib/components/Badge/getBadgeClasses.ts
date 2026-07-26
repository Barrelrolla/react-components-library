import { twMerge } from "tailwind-merge";

export function getBadgeClasses({ className }: { className?: string }) {
  return {
    classes: twMerge("badge", className),
  };
}
