import { useFloatingTransitionsContext } from "@/contexts";
import { UseFloatingData, useTransitionStyles } from "@floating-ui/react";
import { useIsMobile } from "./useIsMobile";
import { MobileSheetPlacementType } from "@/types";

export function useFloatingTransitionStyles(
  data: UseFloatingData,
  mobileSheet?: boolean,
  mobileSheetPlacement?: MobileSheetPlacementType,
) {
  const isMobile = useIsMobile();
  const transitionContext = useFloatingTransitionsContext();
  const arrowSize = transitionContext?.arrowSize ?? 14;
  const arrowX = data.middlewareData.arrow?.x ?? 0;
  const arrowY = data.middlewareData.arrow?.y ?? 0;
  const transformX = arrowX + arrowSize / 2;
  const transformY = arrowY + arrowSize;

  const { isMounted, styles: transitionStyles } = useTransitionStyles(
    data.context,
    {
      initial: {
        scale: isMobile && mobileSheet ? undefined : 0,
        transform:
          isMobile && mobileSheet
            ? mobileSheetPlacement === "bottom" ||
              mobileSheetPlacement === "top"
              ? "scaleY(0)"
              : "scaleX(0)"
            : undefined,
        opacity: 0,
      },
      duration: transitionContext?.duration ?? 150,
      common:
        isMobile && mobileSheet
          ? () => {
              return {
                transformOrigin: mobileSheetPlacement,
              };
            }
          : ({ side }) => ({
              transformOrigin: {
                top: `${transformX}px calc(100% + ${arrowSize}px)`,
                bottom: `${transformX}px ${-arrowSize}px`,
                left: `calc(100% + ${arrowSize}px) ${transformY}px`,
                right: `${-arrowSize}px ${transformY}px`,
              }[side],
            }),
    },
  );

  return { isMounted, transitionStyles };
}
