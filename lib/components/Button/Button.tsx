import { ElementType, SVGProps } from "react";
import { Spinner } from "@/icons";
import { ColorType, InputRadius, PolymorphicProps, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { ButtonVariant, GhostHover } from "./buttonTypes";
import { useButtonStyles } from "./useButtonStyles";

const defaultType = "button" as const;
export type ButtonProps<E extends ElementType> = {
  color?: ColorType;
  variant?: ButtonVariant;
  size?: SizeType;
  radius?: InputRadius;
  ghostHover?: GhostHover;
  retainFocusState?: boolean;
  scaling?: boolean;
  transitions?: boolean;
  disabled?: boolean;
  selected?: boolean;
  loading?: boolean;
  loadingPosition?: "front" | "end";
  startIcon?: SVGProps<SVGSVGElement>;
  endIcon?: SVGProps<SVGSVGElement>;
  wrapperClasses?: string;
} & PolymorphicProps<E>;

export function Button<E extends ElementType = typeof defaultType>({
  as,
  color,
  variant,
  radius,
  ghostHover,
  size,
  retainFocusState = true,
  disabled = false,
  selected = false,
  scaling = true,
  transitions = true,
  loading = false,
  loadingPosition = "front",
  startIcon,
  endIcon,
  className,
  wrapperClasses,
  style,
  children,
  ...rest
}: ButtonProps<E>) {
  const isIcon =
    (startIcon !== undefined || endIcon !== undefined) && !children;
  const isDisabled = disabled || loading;
  const { classes, resolvedColor, wrapperStyles } = useButtonStyles({
    retainFocusState,
    variant,
    ghostHover,
    size,
    isIcon,
    scaling,
    transitions,
    disabled,
    radius,
    color,
    className,
    wrapperClasses,
  });

  const Element = as || defaultType;

  return (
    <span className={wrapperStyles}>
      <Element
        data-selected={selected}
        style={{ ...cssColorProps(resolvedColor), ...style }}
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
