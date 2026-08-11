import { CSSProperties, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FloatingFocusManager,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react";
import { CloseIcon } from "@/icons";
import { getDialogClasses } from "./getDialogClasses";
import { Button, Card, CardProps } from "../index";

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
  /** Additional CSS class names applied to the modal backdrop/overlay element. */
  backdropClassName?: string;
  /**
   * Initial inline CSS styles applied before the opening animation starts
   * (e.g., `{ opacity: 0, transform: 'scale(0.95)' }`). Useful for custom mount animations.
   */
  initialStyles?: CSSProperties;
  /** Automatically shifts focus to the first focusable element inside the dialog when it opens. */
  hasInitialFocus?: boolean;
} & CardProps;

/**
 * Controlled modal dialog component built on top of `Card`.
 *
 * Provides an empty `Card` surface out of the box alongside backdrop overlay management,
 * focus trapping, entry/exit animations, and accessibility handling. Pass any content,
 * form, or card sub-components as children.
 */
export function Dialog({
  hasInitialFocus = true,
  isOpen,
  setIsOpen,
  showClose = true,
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
  const labelId = useId();
  const descriptionId = useId();

  const { classes, scrollArea, backdropClasses } = getDialogClasses({
    backdropClassName,
  });

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!isMounted || !container) {
    return;
  }

  return createPortal(
    <FloatingOverlay lockScroll className={backdropClasses}>
      <FloatingFocusManager
        context={context}
        initialFocus={hasInitialFocus ? 0 : -1}
      >
        <dialog
          ref={refs.setFloating}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          className={classes}
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
