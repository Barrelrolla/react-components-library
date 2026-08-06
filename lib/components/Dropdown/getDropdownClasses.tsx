import { twMerge } from "tailwind-merge";

export function getDropdownTitleClasses({ className }: { className?: string }) {
  return { classes: twMerge("dropdown-title", className) };
}

export function getDropdownListClasses({ className }: { className?: string }) {
  return { classes: twMerge("dropdown-list", className) };
}

export function getDropdownLinkClasses({ className }: { className?: string }) {
  return {
    classes: twMerge("dropdown-link group outline-offset-0", className),
  };
}
