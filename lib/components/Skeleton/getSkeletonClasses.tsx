import { twMerge } from "tailwind-merge";

export function getSkeletonClasses({ className }: { className?: string }) {
  return { classes: twMerge("skeleton", className) };
}