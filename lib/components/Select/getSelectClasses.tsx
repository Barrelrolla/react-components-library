import { twMerge } from "tailwind-merge";

export function getSelectClasses({ className }: { className?: string }) {
  return { classes: twMerge("select", className) };
}

export function getSelectContentClasses({ className }: { className?: string }) {
  return { classes: twMerge("select-content", className) };
}

export function getSelectOptionClasses({ className }: { className?: string }) {
  return { classes: twMerge("select-option", className) };
}
