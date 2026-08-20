import { UseFloatingData, useTransitionStyles } from "@floating-ui/react";
import { useIsMobile } from "./useIsMobile";
import { MobileSheetPlacementType } from "@/types";

export function useFloatingTransitionStyles(
  data: UseFloatingData,
  hasArrow: boolean,
  mobileSheet?: boolean,
  mobileSheetPlacement?: MobileSheetPlacementType,
) {
  const isMobile = useIsMobile();

  const arrowX = 14;
  const arrowY = 14;
  const xOffset = hasArrow ? `${arrowX}px` : "0px";
  const yOffset = hasArrow ? `${arrowY}px` : "0px";

  const { isMounted, styles: transitionStyles } = useTransitionStyles(
    data.context,
    {
      initial: {
        scale: (isMobile && mobileSheet) || !hasArrow ? undefined : 0,
        transform:
          isMobile && mobileSheet
            ? mobileSheetPlacement === "bottom" ||
              mobileSheetPlacement === "top"
              ? "scaleY(0)"
              : "scaleX(0)"
            : hasArrow
              ? undefined
              : "scaleY(0)",
        opacity: 0,
      },
      duration: 150,
      common:
        isMobile && mobileSheet
          ? () => {
              return {
                transformOrigin: mobileSheetPlacement,
              };
            }
          : ({ side }) => ({
              transformOrigin: {
                top: `center calc(100% + ${yOffset})`,
                bottom: `center calc(0px - ${yOffset})`,
                left: `calc(100% + ${xOffset}) center`,
                right: `calc(0px - ${xOffset}) center`,
              }[side],
            }),
    },
  );

  return { isMounted, transitionStyles };
}
