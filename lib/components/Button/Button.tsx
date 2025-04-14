import { ElementType, SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { useButtonStyles } from "./useButtonStyles";
import { Spinner } from "@/icons";
import { ColorType, PolymorphicProps, SizeType } from "@/types";

const defaultType = "button" as const;
export type ButtonProps<E extends ElementType> = {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  clearButtonHover?: ClearButtonHover;
  size?: SizeType;
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  selected?: boolean;
  disabled?: boolean;
  highlights?: boolean;
  scaling?: boolean;
  transitions?: boolean;
  disabledStyles?: boolean;
  selectedStyles?: boolean;
  contrasting?: boolean;
  loading?: boolean;
  loadingPosition?: "front" | "end";
  icon?: SVGProps<SVGSVGElement>;
  endIcon?: SVGProps<SVGSVGElement>;
  wrapperClasses?: string;
  selectedClasses?: string;
} & PolymorphicProps<E>;

export function Button<E extends ElementType = typeof defaultType>({
  as,
  variant = "solid",
  radius = "default",
  clearButtonHover = "outline",
  size = "md",
  primaryColor,
  secondaryColor,
  disabled = false,
  selected = false,
  highlights = true,
  scaling = true,
  transitions = true,
  disabledStyles = true,
  selectedStyles = true,
  contrasting = true,
  loading = false,
  loadingPosition = "front",
  icon,
  endIcon,
  className,
  wrapperClasses,
  selectedClasses,
  children,
  ...rest
}: ButtonProps<E>) {
  const isIcon = (icon !== undefined || endIcon !== undefined) && !children;
  const isDisabled = disabled || loading;
  const classes = useButtonStyles(
    variant,
    radius,
    clearButtonHover,
    size,
    contrasting,
    isIcon,
    disabled,
    highlights,
    scaling,
    selected,
    transitions,
    disabledStyles,
    selectedStyles,
    primaryColor,
    secondaryColor,
    className,
    selectedClasses,
  );
  const wrapperStyles = twMerge(
    "group",
    isDisabled && "cursor-not-allowed",
    wrapperClasses,
  );

  const Element = as || defaultType;

  return (
    <span className={wrapperStyles}>
      <Element className={classes} disabled={isDisabled} {...rest}>
        {(!loading || loadingPosition !== "front") && icon}
        {loading && loadingPosition === "front" && <Spinner />}
        {children}
        {(!loading || loadingPosition !== "end") && endIcon}
        {loading && loadingPosition === "end" && <Spinner />}
      </Element>
    </span>
  );
}
