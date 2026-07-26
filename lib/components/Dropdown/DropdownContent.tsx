import { ComponentProps } from "react";
import { useDropdownContext } from "./DropdownContext";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
} from "@floating-ui/react";
import { getDropdownContentClasses } from "./getDropdownClasses";
import { cssColorProps } from "@/util";
import { useIsMobile } from "@/hooks";

export function DropdownContent({
  className,
  style,
  children,
  ...rest
}: ComponentProps<"span">) {
  const isMobile = useIsMobile();
  const context = useDropdownContext();
  if (!context) {
    throw new Error(
      "Please use the Dropdown Content only inside a Dropdown component!",
    );
  }
  const { classes } = getDropdownContentClasses({
    mobileSheet: context.mobileSheet,
    mobileSheetPlacement: context.mobileSheetPlacement || "bottom",
    className,
  });

  if (!context.isOpen) {
    return null;
  }

  const colorProps = cssColorProps(context.color);

  const colorStyle = { ...cssColorProps(context.color), ...style };
  const styles = { ...colorStyle, ...context.data.floatingStyles };

  return (
    <FloatingPortal>
      <FloatingFocusManager
        context={context.data.context}
        modal={false}
        initialFocus={context.isNested ? -1 : 0}
        returnFocus={
          context && context.returnFocus !== null
            ? context.returnFocus
            : !context.isNested
        }
      >
        <section
          className={classes}
          ref={context.data.refs.setFloating}
          style={isMobile && context.mobileSheet ? colorStyle : styles}
          {...context.interactions.getFloatingProps()}
          {...rest}
        >
          {context.hasArrow && (!isMobile || !context.mobileSheet) && (
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
