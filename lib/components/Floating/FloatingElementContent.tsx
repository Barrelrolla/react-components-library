import { ComponentProps, useCallback } from "react";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from "@floating-ui/react";
import { cssColorPropsReversed } from "@/util";
import { useIsMobile } from "@/hooks";
import { MobileSheetPlacementType } from "@/types";
import { FloatingElementContextType } from "./FloatingElementContextType";
import { useFloatingContext } from "@/contexts/FloatingContext";
import { getFloatingContentClasses } from "./getFloatinigClasses";
import { CloseIcon } from "@/icons";
import { Button } from "../Button";

export type FloatingContentProps = {
  context: FloatingElementContextType;
  coloredArror?: boolean;
  getClasses?: ({
    mobileSheet,
    mobileSheetPlacement,
    className,
  }: {
    mobileSheet: boolean;
    mobileSheetPlacement?: MobileSheetPlacementType;
    className?: string;
  }) => { classes: string };
};

export function FloatingElementContent({
  context,
  coloredArror = false,
  getClasses,
  className,
  style,
  children,
  ...rest
}: FloatingContentProps & ComponentProps<"div">) {
  const isMobile = useIsMobile();
  const floatingContext = useFloatingContext();
  const { mobileSheet, mobileSheetPlacement } = context;
  const { classes } = getClasses
    ? getClasses({
        mobileSheet,
        mobileSheetPlacement,
        className,
      })
    : getFloatingContentClasses({
        mobileSheet,
        mobileSheetPlacement,
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
    }, 60);
  }, []);

  const mergedInnerRefs = useMergeRefs([innerRef, context.scrollContainerRef]);

  if (!context.isOpen) {
    return null;
  }

  const colorProps = cssColorPropsReversed(context.color);
  const mainColorProps = cssColorPropsReversed("main");

  const styles = {
    ...colorProps,
    ...context.transitionStyles,
    ...style,
  };

  const innerClasses = `floating-container-inner ${mobileSheet ? "max-h-3/4 sm:max-h-80" : "max-h-80"}`;
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
          <div style={styles} className={classes} {...rest}>
            {isMobile && mobileSheet && (
              <Button
                type="button"
                onClick={() => {
                  context.setIsOpen(false);
                }}
                color="main"
                variant="ghost"
                size="sm"
                className="absolute top-1 right-1"
                startIcon={<CloseIcon strokeWidth={2} className="size-6" />}
              />
            )}
            <div className={innerClasses} ref={mergedInnerRefs}>
              <div style={{ ...context.scrollListStyle, minHeight: "24px" }}>
                {children}
              </div>
            </div>
            {(!floatingContext || floatingContext.hasArrow) &&
              context.hasArrow &&
              (!isMobile || !mobileSheet) && (
                <FloatingArrow
                  className="arrow"
                  style={coloredArror ? colorProps : mainColorProps}
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
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
