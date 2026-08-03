import { ComponentProps, useCallback } from "react";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
} from "@floating-ui/react";
import { cssColorProps } from "@/util";
import { useIsMobile } from "@/hooks";
import { MobileSheetPlacementType } from "@/types";
import { FloatingElementContextType } from "./FloatingElementContextType";
import { useFloatingContext } from "@/contexts/FloatingContext";
import { twMerge } from "tailwind-merge";

export type FloatingContentProps = {
  context: FloatingElementContextType;
  getClasses: ({
    mobileSheet,
    mobileSheetPlacement,
    className,
  }: {
    mobileSheet: boolean;
    mobileSheetPlacement: MobileSheetPlacementType;
    className?: string;
  }) => { classes: string };
};

export function FloatingElementContent({
  context,
  getClasses,
  className,
  style,
  children,
  ...rest
}: FloatingContentProps & ComponentProps<"div">) {
  const isMobile = useIsMobile();
  const floatingContext = useFloatingContext();
  const { classes } = getClasses({
    mobileSheet: context.mobileSheet,
    mobileSheetPlacement: context.mobileSheetPlacement || "bottom",
    className,
  });

  const innerRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    setTimeout(() => {
      const selected = node.querySelector<HTMLElement>(
        '[data-selected="true"]',
      );
      if (selected) {
        selected.scrollIntoView({ block: "center" });
      }
    }, 50);
  }, []);

  if (!context.isOpen) {
    return null;
  }

  const colorProps = cssColorProps(context.color);

  const styles = {
    ...cssColorProps(context.color),
    ...context.transitionStyles,
    ...style,
  };

  return (
    <FloatingPortal>
      <FloatingFocusManager
        context={context.data.context}
        modal={false}
        initialFocus={context.isNested || !context.useFocus ? -1 : 0}
        returnFocus={
          context && context.returnFocus !== null
            ? context.returnFocus
            : !context.isNested
        }
      >
        <div
          className="floating-container"
          ref={context.data.refs.setFloating}
          {...context.interactions.getFloatingProps()}
          style={
            isMobile && context.mobileSheet
              ? undefined
              : context.data.floatingStyles
          }
        >
          <div
            style={styles}
            className={twMerge("floating-container-inner", classes)}
            ref={innerRef}
            {...rest}
          >
            {(!floatingContext || floatingContext.hasArrow) &&
              context.hasArrow &&
              (!isMobile || !context.mobileSheet) && (
                <FloatingArrow
                  className="arrow"
                  style={colorProps}
                  ref={context.arrowRef}
                  context={context.data.context}
                  height={
                    floatingContext?.arrowSize
                      ? floatingContext.arrowSize / 2
                      : 7
                  }
                  width={floatingContext?.arrowSize ?? 14}
                />
              )}
            {children}
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
