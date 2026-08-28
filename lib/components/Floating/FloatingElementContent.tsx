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
import { getFloatingContentClasses } from "./getFloatinigClasses";
import { CloseIcon } from "@/icons";
import { Button } from "../Button";

export type FloatingContentProps = {
  /** Amount of pixels to offset the floating element on the X scale. */
  offsetX?: number;
  /** Internal positioning context, state, and floating metadata shared across floating components. */
  context: FloatingElementContextType;
  /** When `true`, matches the directional arrow color to the floating element's color variant background. */
  coloredArror?: boolean;
  /** Accessible label applied to the button that collapses the floating element on mobile devices. */
  closeButtonAriaLabel?: string;
  /** Custom class generator function for dynamic styling based on mobile sheet display settings and placement. */
  getClasses?: ({
    mobileSheet,
    mobileSheetPlacement,
    className,
  }: {
    mobileSheet: boolean;
    mobileSheetPlacement?: MobileSheetPlacementType;
    className?: string;
  }) => { classes: string };
} & ComponentProps<"div">;

/**
 * Foundation floating content wrapper that serves as the base surface for all floating UI elements
 * (such as popovers, tooltips, dropdowns, and select menus).
 *
 * Manages floating positioning context, optional directional arrow coloration, dynamic class composition,
 * and mobile bottom-sheet adaptation.
 */
export function FloatingElementContent({
  context,
  offsetX,
  coloredArror = false,
  closeButtonAriaLabel,
  getClasses,
  className,
  style,
  children,
  ...rest
}: FloatingContentProps) {
  const isMobile = useIsMobile();
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
      if (!selected) return;

      const containerRect = node.getBoundingClientRect();
      const selectedRect = selected.getBoundingClientRect();

      const targetScrollTop =
        node.scrollTop +
        (selectedRect.top - containerRect.top) -
        node.clientHeight / 2 +
        selected.clientHeight / 2;

      node.scrollTo({
        top: targetScrollTop,
        behavior: "auto",
      });
    }, 100);
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

  const innerClasses = `floating-container-inner ${mobileSheet ? "max-h-[calc(3/4*100vh)] sm:max-h-80" : "max-h-80"}`;
  return (
    <FloatingPortal>
      <FloatingFocusManager
        context={context.data.context}
        modal={mobileSheet && isMobile}
        disabled={true}
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
          aria-label={rest["aria-label"]}
          {...context.interactions.getFloatingProps()}
          // { "aria-label": rest["aria-label"] }}
          style={
            isMobile && context.mobileSheet
              ? undefined
              : { ...context.data.floatingStyles, translate: `${offsetX}px` }
          }
        >
          <div
            style={styles}
            className={classes}
            {...rest}
            aria-label={undefined}
          >
            {isMobile && mobileSheet && (
              <Button
                aria-label={closeButtonAriaLabel}
                type="button"
                onClick={() => {
                  context.setIsOpen(false);
                }}
                color="main"
                variant="ghost"
                size="sm"
                className="absolute top-1 right-1"
                startIcon={<CloseIcon strokeWidth={2} className="size-6" />}
                useGroup={false}
              />
            )}
            <div className={innerClasses} ref={mergedInnerRefs}>
              <div style={{ ...context.scrollListStyle }}>{children}</div>
            </div>
            {context.hasArrow && (!isMobile || !mobileSheet) && (
              <FloatingArrow
                className="arrow"
                style={coloredArror ? colorProps : mainColorProps}
                ref={context.arrowRef}
                context={context.data.context}
                height={7}
                width={14}
              />
            )}
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
