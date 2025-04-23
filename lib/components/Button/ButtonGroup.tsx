import { Children, ComponentProps } from "react";
import { ColorType, InputRadius, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { ButtonVariant, GhostHover } from "./buttonTypes";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { useButtonGroupStyles } from "./useButtonGroupStyles";
import { Divider } from "../Divider";

export type ButtonGroupProps = {
  color?: ColorType;
  variant?: ButtonVariant;
  ghostHover?: GhostHover;
  retainFocusState?: boolean;
  size?: SizeType;
  radius?: InputRadius;
  transitions?: boolean;
  divider?: boolean;
  vertical?: boolean;
  scaling?: boolean;
  dividerClasses?: string;
} & ComponentProps<"div">;

export function ButtonGroup({
  variant,
  radius,
  ghostHover,
  retainFocusState = false,
  color,
  size,
  divider = true,
  vertical = false,
  scaling = false,
  transitions = true,
  className,
  dividerClasses,
  children,
  ...rest
}: ButtonGroupProps) {
  const { groupStyles, dividerStyles, resolvedColor } = useButtonGroupStyles({
    color,
    variant,
    radius,
    vertical,
    divider,
    className,
    dividerClasses,
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
        transitions,
        vertical,
      }}
    >
      <div className="flex">
        <div
          className={groupStyles}
          style={cssColorProps(resolvedColor)}
          {...rest}
        >
          {Children.map(children, (child, index) => {
            return (
              <>
                {divider && index !== 0 && (
                  <Divider
                    color={resolvedColor}
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
