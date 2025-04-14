import { Children, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonGroupContextProvider } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { useButtonGroupDividerStyles } from "./useButtonGroupDividerStyles";
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
  separator?: boolean;
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
  separator = true,
  vertical = false,
  scaling = false,
  className,
  dividerClasses,
  children,
}: ButtonGroupProps) {
  const groupClasses = twMerge(
    "flex",
    !vertical && "-space-x-0.25",
    vertical && "flex-col -space-y-0.25",
    className,
  );
  const dividerStyles = useButtonGroupDividerStyles(
    contrasting,
    variant,
    vertical,
    primaryColor,
    secondaryColor,
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
        <div className={groupClasses}>
          {Children.map(children, (child, index) => {
            return (
              <>
                {separator && index !== 0 && (
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
