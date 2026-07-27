import { ComponentProps, CSSProperties, useEffect, useState } from "react";
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

export type DialogProps = {
  /** You should keep track of the open state of the dialog, it doesn't do it by itself, save it in a state? */
  isOpen: boolean;
  /** This function will be called when the dialog wants to close.  */
  setIsOpen: (open: boolean) => void;
  /** Classes for the backdrop. */
  backdropClassName?: string;
  initialStyles?: CSSProperties
} & ComponentProps<"dialog">;

/** The dialog component has no visuals. You should add your own visual as children. You can use a card or a form or whatever you'd like */
export function Dialog({
  isOpen,
  setIsOpen,
  backdropClassName,
  initialStyles,
  className,
  children,
  style,
  ...props
}: DialogProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const resolvedInitialStyles = initialStyles || { opacity: 0, scale: 0.5, translate: '0 -100px' };
  const { isMounted, styles } = useTransitionStyles(context, { initial: resolvedInitialStyles, duration: 150 });
  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "click" });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([click, dismiss, role]);
  const labelId = useId();
  const descriptionId = useId();

  const { classes, backdropClasses } = getDialogClasses({
    className,
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
      <FloatingFocusManager context={context}>
        <dialog
          className={classes}
          ref={refs.setFloating}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          open
          style={{ ...style, ...styles }}
          {...getFloatingProps()}
          {...props}
        >
          {children}
        </dialog>
      </FloatingFocusManager>
    </FloatingOverlay>,
    container,
  );
}
