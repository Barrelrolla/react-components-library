import { CSSProperties, RefObject, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FloatingFocusManager,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react";
import { CloseIcon } from "@/icons";
import { getDialogClasses } from "./getDialogClasses";
import { Button } from "../Button/Button";
import { Card, CardProps } from "../Card/Card";

export type DialogProps = {
  /**
   * Controls the open/visible state of the dialog.
   * As a controlled component, this state must be managed by the parent.
   */
  isOpen: boolean;
  /** Callback fired when the dialog requests to be closed (e.g., clicking the backdrop or pressing Escape). */
  setIsOpen: (open: boolean) => void;
  /** Determines if a built-in close button should be rendered. */
  showClose?: boolean;
  /** Accessible label for the close button. */
  closeButtonAriaLabel?: string;
  /** Additional CSS class names applied to the modal backdrop/overlay element. */
  backdropClassName?: string;
  /**
   * Initial inline CSS styles applied before the opening animation starts
   * (e.g., `{ opacity: 0, transform: 'scale(0.95)' }`). Useful for custom mount animations.
   */
  initialStyles?: CSSProperties;
  /** Index or ref to the element to be initially focused. */
  initialFocus?: number | RefObject<HTMLElement | null> | undefined;
} & CardProps;

/**
 * Controlled modal dialog component built on top of `Card`.
 *
 * Provides an empty `Card` surface out of the box alongside backdrop overlay management,
 * focus trapping, entry/exit animations, and accessibility handling. Pass any content,
 * form, or card sub-components as children.
 */
export function Dialog({
  initialFocus = 1,
  isOpen,
  setIsOpen,
  showClose = true,
  closeButtonAriaLabel,
  backdropClassName,
  initialStyles,
  className,
  children,
  ...props
}: DialogProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const resolvedInitialStyles = initialStyles || {
    opacity: 0,
    scale: 0.5,
    translate: "0 -100px",
  };
  const { isMounted, styles } = useTransitionStyles(context, {
    initial: resolvedInitialStyles,
    duration: 150,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "click" });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  const { classes, scrollArea, backdropClasses } = getDialogClasses({
    backdropClassName,
  });

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!isMounted || !container) {
    return;
  }

  const ariaLabel = props["aria-label"];
  const ariaLabelledBy = props["aria-labelledby"];

  return createPortal(
    <FloatingOverlay lockScroll className={backdropClasses}>
      <FloatingFocusManager context={context} initialFocus={initialFocus}>
        <dialog
          ref={refs.setFloating}
          className={classes}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          open
          style={styles}
          {...getFloatingProps()}
        >
          <Card className={className} {...props}>
            <div className={scrollArea}>
              {showClose && (
                <Button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  aria-label={closeButtonAriaLabel}
                  color="main"
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  startIcon={<CloseIcon strokeWidth={2} className="size-6" />}
                />
              )}
              {children}
            </div>
          </Card>
        </dialog>
      </FloatingFocusManager>
    </FloatingOverlay>,
    container,
  );
}
