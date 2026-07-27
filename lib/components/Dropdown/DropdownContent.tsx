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
}: ComponentProps<"div">) {
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

  const styles = {
    ...cssColorProps(context.color),
    ...context.transitionStyles,
    ...style,
  };

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
        <div
          ref={context.data.refs.setFloating}
          // style={context.data.floatingStyles}
          {...context.interactions.getFloatingProps()}
          style={isMobile && context.mobileSheet ? undefined : context.data.floatingStyles}
        >
          <div
            style={styles}
            className={classes}
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
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
