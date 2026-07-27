import { twMerge } from "tailwind-merge";

export function getSheetClasses({ className }: { className?: string }) {
  return { classes: twMerge("sheet", className) };
}