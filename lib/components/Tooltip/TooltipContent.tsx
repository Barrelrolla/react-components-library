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
}: ComponentProps<"div">) {
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
    ...context.transitionStyles,
    ...style,
  };

  return (
    <FloatingPortal>
      <div
        ref={context.data.refs.setFloating}
        style={context.data.floatingStyles}
        {...context.interactions.getFloatingProps()}
      >
        <div
          style={styles}
          className={classes}
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
        </div>
      </div>
    </FloatingPortal>
  );
}
