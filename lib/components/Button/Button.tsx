import { ElementType, SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonVariantProps } from "./buttonTypes";
import { useButtonStyles } from "./useButtonStyles";
import { Spinner } from "@/icons";
import { ColorType, PolymorphicProps } from "@/types";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { cssColorProps } from "@/util/cssColorProps";

const defaultType = "button" as const;
export type ButtonProps<E extends ElementType> = {
  color?: ColorType;
  transitions?: boolean;
  disabled?: boolean;
  selected?: boolean;
  loading?: boolean;
  loadingPosition?: "front" | "end";
  startIcon?: SVGProps<SVGSVGElement>;
  endIcon?: SVGProps<SVGSVGElement>;
  wrapperClasses?: string;
} & ButtonVariantProps &
  PolymorphicProps<E>;

export function Button<E extends ElementType = typeof defaultType>({
  as,
  variant = "solid",
  radius = "default",
  ghostHover = "fill",
  size = "md",
  color,
  disabled = false,
  selected = false,
  scaling = true,
  transitions = true,
  loading = false,
  loadingPosition = "front",
  startIcon,
  endIcon,
  icon,
  className,
  wrapperClasses,
  style,
  children,
  ...rest
}: ButtonProps<E>) {
  const isIcon =
    icon || ((startIcon !== undefined || endIcon !== undefined) && !children);
  const isDisabled = disabled || loading;
  const classes = useButtonStyles(
    {
      variant,
      radius,
      size,
      ghostHover,
      scaling,
      icon: isIcon,
    },
    transitions,
    className,
  );

  const wrapperStyles = twMerge(
    "group",
    isDisabled && "cursor-not-allowed",
    wrapperClasses,
  );

  const Element = as || defaultType;

  const resolvedColor = color || useButtonGroupContext()?.color || "primary";

  return (
    <span className={wrapperStyles}>
      <Element
        style={style || cssColorProps(resolvedColor)}
        className={classes}
        disabled={isDisabled}
        {...rest}
      >
        <>
          {(!loading || loadingPosition !== "front") && startIcon}
          {loading && loadingPosition === "front" && <Spinner />}
          {children}
          {(!loading || loadingPosition !== "end") && endIcon}
          {loading && loadingPosition === "end" && <Spinner />}
        </>
      </Element>
    </span>
  );
}
