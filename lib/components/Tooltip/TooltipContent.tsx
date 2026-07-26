import { ComponentProps } from "react";
import { useTooltipContext } from "./TooltipContext";
import { FloatingArrow, FloatingPortal } from "@floating-ui/react";
import { getTooltipClasses } from "./getTooltipClasses";
import { cssColorProps } from "@/util";

export function TooltipContent({
  className,
  style,
  children,
  ...rest
}: ComponentProps<"span">) {
  const { classes } = getTooltipClasses({ className });

  const context = useTooltipContext();
  if (!context) {
    throw new Error(
      "Please use the Tooltip Content only inside a Tooltip component!",
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
      <span
        ref={context.data.refs.setFloating}
        style={styles}
        className={classes}
        {...rest}
        {...context.interactions.getFloatingProps()}
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
