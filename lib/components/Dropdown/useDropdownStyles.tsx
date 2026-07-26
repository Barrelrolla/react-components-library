import { MobileSheetPlacementType } from "@/types";
import { twMerge } from "tailwind-merge";

export function useDropdownContentStyles({
  mobileSheet,
  mobileSheetPlacement,
  className,
}: {
  mobileSheet: boolean;
  mobileSheetPlacement: MobileSheetPlacementType;
  className?: string;
}) {
  return {
    classes: twMerge(
      "dropdown",
      mobileSheet &&
        mobileSheetPlacement === "top" &&
        "max-sm:dropdown-mobile-top",
      mobileSheet &&
        mobileSheetPlacement === "bottom" &&
        "max-sm:dropdown-mobile-bottom",
      mobileSheet &&
        mobileSheetPlacement === "left" &&
        "max-sm:dropdown-mobile-left",
      mobileSheet &&
        mobileSheetPlacement === "right" &&
        "max-sm:dropdown-mobile-right",

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
