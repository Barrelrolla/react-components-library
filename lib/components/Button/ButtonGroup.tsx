import { Children, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonGroupContext } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { ColorType } from "@/types";
import { colors } from "@/util/colors";

export interface ButtonGroupProps extends ComponentProps<"div"> {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  clearButtonHover?: ClearButtonHover;
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  contrasting?: boolean;
  separator?: boolean;
  vertical?: boolean;
}

export function ButtonGroup({
  variant = "outline",
  radius = "default",
  clearButtonHover = "none",
  primaryColor = "black",
  secondaryColor = "white",
  contrasting = true,
  separator = true,
  vertical = false,
  className,
  children,
}: ButtonGroupProps) {
  const dividerClasses = twMerge(
    colors[primaryColor].darkShade.regular.bgColor,
    contrasting && colors[secondaryColor].lightShade.dark.bgColor,
    variant === "solid" && colors[secondaryColor].lightShade.regular.bgColor,
    variant === "solid" &&
      contrasting &&
      colors[primaryColor].darkShade.dark.bgColor,
    !vertical && "w-0.25",
    vertical && "h-0.25",
    "z-1",
  );
  return (
    <ButtonGroupContext.Provider
      value={{
        variant,
        radius,
        clearButtonHover,
        primaryColor,
        secondaryColor,
        contrasting,
        vertical,
      }}
    >
      <div className="flex">
        <div
          className={twMerge(
            "flex",
            !vertical && "-space-x-0.25",
            vertical && "flex-col -space-y-0.25",
            className,
          )}
        >
          {Children.map(children, (child, index) => {
            return (
              <>
                {separator && index !== 0 && (
                  <div className={dividerClasses}></div>
                )}
                {child}
              </>
            );
          })}
        </div>
      </div>
    </ButtonGroupContext.Provider>
  );
}
