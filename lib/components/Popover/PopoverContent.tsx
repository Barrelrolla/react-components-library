import { ComponentProps } from "react";
import { usePopoverContext } from "./PopoverContext";
import { FloatingArrow, FloatingPortal } from "@floating-ui/react";
import { usePopoverStyles } from "./usePopoverStyles";
import { cssColorProps } from "@/util";

export function PopoverContent({
  className,
  style,
  children,
  ...rest
}: ComponentProps<"span">) {
  const { classes } = usePopoverStyles({ className });

  const context = usePopoverContext();
  if (!context) {
    throw new Error(
      "Please use the Popover Content only inside a Popover component!",
    );
  }

  if (!context.isOpen) {
    return null;
  }

  const styles = {
    ...cssColorProps(context.color),
    ...context.data.floatingStyles,
    ...style,
  };

  const ariaLabel = { ...rest }["aria-label"];
  const ariaDescribed = { ...rest }["aria-describedby"];
  if (!ariaLabel && !ariaDescribed) {
    console.warn(
      "Provide an aria-label describing the purpose of the popover.",
    );
  }

  return (
    <FloatingPortal>
      <span
        ref={context.data.refs.setFloating}
        style={styles}
        className={classes}
        {...context.interactions.getFloatingProps()}
        {...rest}
      >
        <>
          {context.hasArrow && (
            <>
              <FloatingArrow
                className="arrow"
                style={{ ...cssColorProps(context.color) }}
                ref={context.arrowRef}
                context={context.data.context}
              />
            </>
          )}
          {children}
        </>
      </span>
    </FloatingPortal>
  );
}
