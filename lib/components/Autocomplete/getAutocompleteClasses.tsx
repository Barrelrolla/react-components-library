import { twMerge } from "tailwind-merge";

export function getAutocompleteClasses({ className }: { className?: string }) {
  return { classes: twMerge("autocomplete", className) };
}