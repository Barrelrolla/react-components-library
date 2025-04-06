import { twMerge } from "tailwind-merge";
import { getButtonStyles } from "./buttonStyles";
import { ColorType, PolymorphicProps, SizeType } from "../../types";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import {
  ComponentPropsWithoutRef,
  ElementType,
  SVGProps,
  useContext,
} from "react";
import { ButtonGroupContext } from "./ButtonGroupContext";
import { Spinner } from "@/icons/icons";

const defaultType = "button" as const;
type ButtonProps<E extends ElementType> = {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  clearButtonHover?: ClearButtonHover;
  size?: SizeType;
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  disabled?: boolean;
  disableHoverHighlight?: boolean;
  disableScale?: boolean;
  disableDisabledStyle?: boolean;
  contrasting?: boolean;
  loading?: boolean;
  loadingPosition?: "front" | "end";
  icon?: SVGProps<SVGSVGElement>;
  endIcon?: SVGProps<SVGSVGElement>;
} & ComponentPropsWithoutRef<E> &
  PolymorphicProps<E>;

export function Button<E extends ElementType = typeof defaultType>({
  as,
  variant = "solid",
  radius = "default",
  clearButtonHover = "outline",
  size = "md",
  primaryColor = "black",
  secondaryColor = "white",
  disabled = false,
  disableHoverHighlight = false,
  disableScale = false,
  disableDisabledStyle = false,
  contrasting = true,
  loading = false,
  loadingPosition = "front",
  icon,
  endIcon,
  className,
  children,
  ...rest
}: ButtonProps<E>) {
  const context = useContext(ButtonGroupContext);
  const isIcon = (icon !== undefined || endIcon !== undefined) && !children;
  const isDisabled = disabled || loading;

  const classes = twMerge(
    getButtonStyles(
      context?.variant || variant,
      context?.radius || radius,
      context?.clearButtonHover || clearButtonHover,
      context !== undefined,
      context?.vertical || false,
      context?.primaryColor || primaryColor,
      context?.secondaryColor || secondaryColor,
      size,
      context ? context.contrasting : contrasting,
      isIcon,
      !disableDisabledStyle && isDisabled,
      context ? false : disableHoverHighlight,
      context ? true : disableScale,
    ),
    className,
  );
  const Element = as || defaultType;
  return (
    <span className={twMerge("group", isDisabled && "cursor-not-allowed")}>
      <Element className={classes} disabled={isDisabled} {...rest}>
        {(!loading || loadingPosition !== "front") && icon}
        {loading && loadingPosition === "front" && <Spinner size={size} />}
        {children}
        {(!loading || loadingPosition !== "end") && endIcon}
        {loading && loadingPosition === "end" && <Spinner size={size} />}
      </Element>
    </span>
  );
}
