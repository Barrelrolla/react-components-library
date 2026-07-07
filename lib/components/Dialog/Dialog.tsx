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
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  backdropClasses?: string;
} & ComponentProps<"dialog">;

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
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
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
