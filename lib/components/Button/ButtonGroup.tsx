import { Children, ComponentProps, Fragment } from "react";
import { ColorType, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { getButtonGroupClasses } from "./getButtonGroupClasses";
import { Divider } from "../Divider";
import { FloatingDelayGroup } from "@floating-ui/react";

export type ButtonGroupProps = {
  /** Color variant applied to all child buttons in the group. */
  color?: ColorType;
  /** Visual style variant applied to all child buttons in the group. */
  variant?: ButtonVariant;
  /** If `true`, child buttons retain their active hover visual state while focused. */
  retainFocusState?: boolean;
  /** Size option applied to all child buttons in the group. */
  size?: SizeType;
  /** Border radius option applied to the outer corners of the group. */
  radius?: ButtonRadius;
  /** Displays a vertical or horizontal divider line between adjacent group items. */
  divider?: boolean;
  /** Stacks group items vertically instead of horizontally. */
  vertical?: boolean;
  /** Controls click press-scaling effects on child buttons. Set to `false` to disable. */
  scaling?: boolean;
  /** Additional CSS classes applied to the internal divider elements. */
  dividerClassName?: string;
  /** Additional CSS classes applied to the outer wrapper element. */
  wrapperClassName?: string;
  /**
   * Initial hover delay (in ms) before showing tooltips in the group.
   * Once active, moving focus between buttons skips this delay for smooth navigation.
   */
  tooltipDelay?: number;
} & ComponentProps<"div">;

/**
 * Combines multiple buttons into a cohesive visual group.
 *
 * Automatically synchronizes color, variant, and size across child elements,
 * seamlessly modifying border radii and borders to present them as a single UI element.
 *
 * In addition to `Button` components, this group wrapper also supports `Input`,
 * `Select`, and `Combobox` controls.
 */
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
