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
import { getDialogClasses } from "./getDialogClasses";
import { Card, CardProps } from "../Card";
import { Button } from "../Button";
import { CloseIcon } from "@/icons";

export type DialogProps = {
  /** You should keep track of the open state of the dialog, it doesn't do it by itself, save it in a state? */
  isOpen: boolean;
  /** This function will be called when the dialog wants to close.  */
  setIsOpen: (open: boolean) => void;
  showClose?: boolean;
  /** Classes for the backdrop. */
  backdropClassName?: string;
  initialStyles?: CSSProperties;
  hasInitialFocus?: boolean;
} & CardProps;

/** The dialog component has no visuals. You should add your own visual as children. You can use a card or a form or whatever you'd like */
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
