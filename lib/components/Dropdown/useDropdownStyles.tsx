import { twMerge } from "tailwind-merge";

export function useDropdownContentStyles({
  mobileSheet,
  className,
}: {
  mobileSheet: boolean;
  className?: string;
}) {
  return {
    classes: twMerge(
      "dropdown",
      mobileSheet && "max-sm:dropdown-mobile",
      className,
    ),
  };
}

export function useDropdownTitleStyles({ className }: { className?: string }) {
  return { classes: twMerge("dropdown-title", className) };
}

export function useDropdownLinkStyles({ className }: { className?: string }) {
  return { classes: twMerge("dropdown-link outline-offset-0", className) };
}
