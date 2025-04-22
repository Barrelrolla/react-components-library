import { Children, ComponentProps } from "react";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { useButtonGroupStyles } from "./useButtonGroupStyles";
import { Divider } from "../Divider";
import { ColorType, InputRadius, SizeType } from "@/types";
import { cssColorProps } from "@/util/cssColorProps";
import { ButtonVariant, GhostHover } from "./buttonTypes";

export type ButtonGroupProps = {
  color?: ColorType;
  variant?: ButtonVariant;
  ghostHover?: GhostHover;
  size?: SizeType;
  radius?: InputRadius;
  transitions?: boolean;
  divider?: boolean;
  bordered?: boolean;
  vertical?: boolean;
  scaling?: boolean;
  dividerClasses?: string;
} & ComponentProps<"div">;

export function ButtonGroup({
  variant = "outline",
  radius = "small",
  ghostHover = "none",
  color = "primary",
  size = "md",
  divider = true,
  vertical = false,
  scaling = false,
  bordered = true,
  className,
  dividerClasses,
  children,
}: ButtonGroupProps) {
  const { groupStyles, dividerStyles } = useButtonGroupStyles(
    variant,
    radius,
    vertical,
    bordered,
    divider,
    className,
    dividerClasses,
  );

  return (
    <ButtonGroupContextProvider
      value={{
        variant,
        radius,
        ghostHover,
        color,
        size,
        scaling,
      }}
    >
      <div className="flex">
        <div className={groupStyles} style={cssColorProps(color)}>
          {Children.map(children, (child, index) => {
            return (
              <>
                {divider && index !== 0 && (
                  <Divider
                    color={color}
                    className={dividerStyles}
                    vertical={!vertical}
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
