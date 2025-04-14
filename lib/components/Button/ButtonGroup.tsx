import { Children, ComponentProps } from "react";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { useButtonGroupStyles } from "./useButtonGroupStyles";
import { Divider } from "../Divider";
import { ColorType, SizeType } from "@/types";

export type ButtonGroupProps = {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  clearButtonHover?: ClearButtonHover;
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  size?: SizeType;
  contrasting?: boolean;
  divider?: boolean;
  bordered?: boolean;
  vertical?: boolean;
  scaling?: boolean;
  dividerClasses?: string;
} & ComponentProps<"div">;

export function ButtonGroup({
  variant = "outline",
  radius = "default",
  clearButtonHover = "none",
  primaryColor,
  secondaryColor,
  size = "md",
  contrasting = true,
  divider = true,
  vertical = false,
  scaling = false,
  bordered = true,
  className,
  dividerClasses,
  children,
}: ButtonGroupProps) {
  const { groupStyles, dividerStyles } = useButtonGroupStyles(
    contrasting,
    variant,
    vertical,
    bordered,
    radius,
    divider,
    primaryColor,
    secondaryColor,
    className,
    dividerClasses,
  );

  return (
    <ButtonGroupContextProvider
      value={{
        variant,
        radius,
        clearButtonHover,
        primaryColor,
        secondaryColor,
        size,
        contrasting,
        vertical,
        scaling,
      }}
    >
      <div className="flex">
        <div className={groupStyles}>
          {Children.map(children, (child, index) => {
            return (
              <>
                {divider && index !== 0 && (
                  <Divider className={dividerStyles} vertical={!vertical} />
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
