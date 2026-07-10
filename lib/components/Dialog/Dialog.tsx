import { ComponentProps, useEffect, useState } from "react";
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
} from "@floating-ui/react";
import { useDialogStyles } from "./useDialogStyles";

export type DialogProps = {
  /** You should keep track of the open state of the dialog, it doesn't do it by itself, save it in a state? */
  isOpen: boolean;
  /** This function will be called when the dialog wants to close.  */
  setIsOpen: (open: boolean) => void;
  /** Classes for the backdrop. */
  backdropClasses?: string;
} & ComponentProps<"dialog">;

/** The dialog component has no visuals. You should add your own visual as children. You can use a card or a form or whatever you'd like */
export function Dialog({
  isOpen,
  setIsOpen,
  backdropClasses,
  className,
  children,
  ...props
}: DialogProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "click" });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([click, dismiss, role]);
  const labelId = useId();
  const descriptionId = useId();

  const { styles, backdropStyles } = useDialogStyles({
    className,
    backdropClasses,
  });

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!isOpen || !container) {
    return;
  }

  return createPortal(
    <FloatingOverlay lockScroll className={backdropStyles}>
      <FloatingFocusManager context={context}>
        <dialog
          className={styles}
          ref={refs.setFloating}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          open={isOpen}
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
