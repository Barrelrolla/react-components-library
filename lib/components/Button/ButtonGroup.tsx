import { Children, ComponentProps } from "react";
import { ColorType, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { ButtonRadius, ButtonVariant, GhostHover } from "./buttonTypes";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { useButtonGroupStyles } from "./useButtonGroupStyles";
import { Divider } from "../Divider";

export type ButtonGroupProps = {
  /** Color of the buttons in the group. */
  color?: ColorType;
  /** Variant of the buttons. */
  variant?: ButtonVariant;
  /** Hover variant of the ghost buttons. */
  ghostHover?: GhostHover;
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
  dividerClasses?: string;
  /** The button group wraps all buttons in a wrapper. You can add css classes to it here. */
  wrapperClasses?: string;
} & ComponentProps<"div">;

export function ButtonGroup({
  color = "primary",
  variant = "solid",
  radius,
  ghostHover,
  retainFocusState = false,
  size,
  divider = true,
  vertical = false,
  scaling = false,
  className,
  dividerClasses,
  children,
  ...rest
}: ButtonGroupProps) {
  const { groupStyles, wrapperStyles } = useButtonGroupStyles({
    variant,
    radius,
    vertical,
    className,
  });

  return (
    <ButtonGroupContextProvider
      value={{
        color,
        variant,
        ghostHover,
        retainFocusState,
        radius,
        size,
        scaling,
        vertical,
      }}
    >
      <div className={wrapperStyles}>
        <div className={groupStyles} style={cssColorProps(color)} {...rest}>
          {Children.map(children, (child, index) => {
            return (
              <>
                {divider && index !== 0 && (
                  <Divider
                    color={color}
                    useBgColor={variant !== "solid"}
                    vertical={!vertical}
                    className={dividerClasses}
                  />
                )}
                {child}
              </>
            );
          })}
        </div>
      </div>
    </ButtonGroupContextProvider>
  );
}
