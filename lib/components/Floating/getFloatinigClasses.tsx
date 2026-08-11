import { MobileSheetPlacementType } from "@/types";
import { twMerge } from "tailwind-merge";

export function getFloatingContentClasses({
  mobileSheet,
  mobileSheetPlacement = "bottom",
  className,
}: {
  mobileSheet: boolean;
  mobileSheetPlacement?: MobileSheetPlacementType;
  className?: string;
}) {
  return {
    classes: twMerge(
      "floating",
      !mobileSheet && "floating-border",
      mobileSheet && "sm:floating-border",
      mobileSheet &&
        mobileSheetPlacement === "top" &&
        "max-sm:floating-mobile-top",
      mobileSheet &&
        mobileSheetPlacement === "bottom" &&
        "max-sm:floating-mobile-bottom",
      mobileSheet &&
        mobileSheetPlacement === "left" &&
        "max-sm:floating-mobile-left",
      mobileSheet &&
        mobileSheetPlacement === "right" &&
        "max-sm:floating-mobile-right",
      className,
    ),
  };
}

export function getFloatingListItemClasses({
  className,
  isMobile,
  mobileSheet,
}: {
  className?: string;
  isMobile: boolean;
  mobileSheet: boolean;
}) {
  return {
    classes: twMerge(
      "floating-list-item",
      isMobile && mobileSheet && "p-3 sm:p-1",
      (!isMobile || !mobileSheet) && "p-1",
      className,
    ),
  };
}
