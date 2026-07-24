import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
} from "@floating-ui/react";
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

  const colorProps = cssColorProps(context.color);
  let isMobile = false;
  if (window) {
    isMobile = window.matchMedia("(width <= 600px)").matches;
  }

  const colorStyle = { ...cssColorProps(context.color), ...style };
  const styles = { ...colorStyle, ...context.data.floatingStyles };

  return (
    <FloatingPortal>
      <FloatingFocusManager
        context={context.data.context}
        modal={false}
        initialFocus={context.isNested ? -1 : 0}
        returnFocus={!context.isNested}
      >
        <section
          className={classes}
          ref={context.data.refs.setFloating}
          style={isMobile ? colorStyle : styles}
          {...context.interactions.getFloatingProps()}
          {...rest}
        >
          {context.hasArrow && !isMobile && (
            <FloatingArrow
              className="arrow"
              style={colorProps}
              ref={context.arrowRef}
              context={context.data.context}
            />
          )}
          {children}
          <></>
        </section>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
