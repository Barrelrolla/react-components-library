import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import { FloatingArrow, FloatingPortal } from "@floating-ui/react";
import { useDropdownStyles } from "./useDropdownStyles";
import { cssColorProps } from "@/util";

export function DropdownContent({
  className,
  style,
  children,
  ...rest
}: ComponentProps<"span">) {
  const { classes } = useDropdownStyles({ className });

  const context = useDropdownContext();
  if (!context) {
    throw new Error(
      "Please use the Dropdown Content only inside a Dropdown component!",
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

  return (
    <FloatingPortal>
      <section
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
      </section>
    </FloatingPortal>
  );
}
