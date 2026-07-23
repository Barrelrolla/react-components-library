import { twMerge } from "tailwind-merge";

export function useDropdownStyles({ className }: { className?: string }) {
  return { classes: twMerge("dropdown max-md:dropdown-mobile", className) };
}

export function useDropdownTitleStyles({ className }: { className?: string }) {
  return { classes: twMerge("dropdown-title", className) };
}

export function useDropdownLinkStyles({ className }: { className?: string }) {
  return { classes: twMerge("dropdown-link outline-offset-0", className) };
}
