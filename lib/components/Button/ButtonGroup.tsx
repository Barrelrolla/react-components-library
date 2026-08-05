import { Children, ComponentProps, Fragment } from "react";
import { ColorType, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { getButtonGroupClasses } from "./getButtonGroupClasses";
import { Divider } from "../Divider";
import { FloatingDelayGroup } from "@floating-ui/react";

export type ButtonGroupProps = {
  /** Color of the buttons in the group. */
  color?: ColorType;
  /** Variant of the buttons. */
  variant?: ButtonVariant;
  /** If the buttons should retain focus state after being pressed. */
  retainFocusState?: boolean;
  /** Size of the buttons. */
  size?: SizeType;
  /** Radius of the buttons. */
  radius?: ButtonRadius;
  /** Adds a divider between the buttons. */
  divider?: boolean;
  /** Set to `true` for a vertical group. */
  vertical?: boolean;
  /** Disables scaling of the buttons on press. */
  scaling?: boolean;
  /** You can add any styles to the divider here. */
  dividerClassName?: string;
  /** The button group wraps all buttons in a wrapper. You can add css classes to it here. */
  wrapperClassName?: string;
  tooltipDelay?: number;
} & ComponentProps<"div">;

export function ButtonGroup({
  color = "primary",
  variant = "outline",
  radius,
  retainFocusState = false,
  size,
  divider = true,
  vertical = false,
  scaling = false,
  tooltipDelay = 300,
  className,
  dividerClassName,
  wrapperClassName,
  children,
  ...rest
}: ButtonGroupProps) {
  const { groupClasses, wrapperClasses } = getButtonGroupClasses({
    variant,
    radius,
    vertical,
    className,
    wrapperClassName,
  });

  return (
    <ButtonGroupContextProvider
      value={{
        color,
        variant,
        retainFocusState,
        radius,
        size,
        scaling,
        vertical,
      }}
    >
      <FloatingDelayGroup delay={{ open: tooltipDelay, close: 0 }}>
        <div className={wrapperClasses}>
          <div className={groupClasses} style={cssColorProps(color)} {...rest}>
            {Children.map(children, (child, index) => {
              return (
                <Fragment key={index}>
                  {divider && index !== 0 && (
                    <Divider
                      color={color}
                      useBgColor={variant !== "solid"}
                      vertical={!vertical}
                      className={dividerClassName}
                    />
                  )}
                  {child}
                </Fragment>
              );
            })}
          </div>
        </div>
      </FloatingDelayGroup>
    </ButtonGroupContextProvider>
  );
}
