import { CSSProperties, ElementType, SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { useButtonStyles } from "./useButtonStyles";
import { Spinner } from "@/icons";
import { ColorType, PolymorphicProps, SizeType } from "@/types";
import { useButtonGroupContext } from "./ButtonGroupContext";

const defaultType = "button" as const;
export type ButtonProps<E extends ElementType> = {
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  clearButtonHover?: ClearButtonHover;
  size?: SizeType;
  color?: ColorType;
  selected?: boolean;
  disabled?: boolean;
  highlights?: boolean;
  scaling?: boolean;
  transitions?: boolean;
  loading?: boolean;
  loadingPosition?: "front" | "end";
  icon?: SVGProps<SVGSVGElement>;
  endIcon?: SVGProps<SVGSVGElement>;
  wrapperClasses?: string;
} & PolymorphicProps<E>;

export function Button<E extends ElementType = typeof defaultType>({
  as,
  variant = "solid",
  radius = "default",
  clearButtonHover = "outline",
  size = "md",
  color,
  disabled = false,
  selected = false,
  highlights = true,
  scaling = true,
  transitions = true,
  loading = false,
  loadingPosition = "front",
  icon,
  endIcon,
  className,
  wrapperClasses,
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
    isIcon,
    highlights,
    scaling,
    selected,
    transitions,
    className,
  );
  const wrapperStyles = twMerge(
    "group",
    isDisabled && "cursor-not-allowed",
    wrapperClasses,
  );

  const Element = as || defaultType;

  const resolvedColor =
    color || useButtonGroupContext()?.primaryColor || "primary";

  return (
    <span className={wrapperStyles}>
      <Element
        style={
          {
            "--btn-bg": `var(--color-${resolvedColor})`,
            "--btn-fg": `var(--color-${resolvedColor}-content)`,
          } as CSSProperties
        }
        className={classes}
        disabled={isDisabled}
        {...rest}
      >
        <>
          {(!loading || loadingPosition !== "front") && icon}
          {loading && loadingPosition === "front" && <Spinner />}
          {children}
          {(!loading || loadingPosition !== "end") && endIcon}
          {loading && loadingPosition === "end" && <Spinner />}
        </>
      </Element>
    </span>
  );
}
