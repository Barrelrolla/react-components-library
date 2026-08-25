import { ElementType, ReactNode } from "react";
import { Spinner } from "@/icons";
import { ColorType, PolymorphicProps, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";
import { getButtonClasses } from "./getButtonClasses";
import { useTheme } from "@/contexts";
import { useButtonGroupContext } from "./ButtonGroupContext";

const defaultType = "button" as const;
export type ButtonProps<E extends ElementType> = {
  /** Color variant of the button. */
  color?: ColorType;
  /** Visual style variant. */
  variant?: ButtonVariant;
  /** Button size option. */
  size?: SizeType;
  /** Border radius override. Uses the theme default `--radius-inputs` if unset. */
  radius?: ButtonRadius;
  /** Retains the active hover visual state while focused (e.g., keeps outline or ghost buttons filled). */
  retainFocusState?: boolean;
  /** Enables press/active scaling effect on click. */
  scaling?: boolean;
  /** Disables user interaction and applies disabled visual styles. */
  disabled?: boolean;
  /** Highlights the button as active/selected, useful within button groups or toggle states. */
  selected?: boolean;
  /** Displays an animated spinner and disables user interaction. */
  loading?: boolean;
  /** Placement of the loading spinner relative to the button label. */
  loadingPosition?: "start" | "end";
  /** Icon element placed before the button label. Automatically replaced by the spinner when `loading` is true. */
  startIcon?: ReactNode;
  /** Icon element placed after the button label. Automatically replaced by the spinner when `loading` is true and `loadingPosition` is "end" */
  endIcon?: ReactNode;
  /** Additional CSS class names for the outer wrapper `div` used for disabled cursor handling. */
  wrapperClassName?: string;
  /** When set to `false`, forces a child button within a `ButtonGroup` to ignore group border and border-radius joining rules. */
  useGroup?: boolean;
} & PolymorphicProps<E>;

/**
 * Highly customizable polymorphic button component.
 *
 * Supports visual variants, sizes, icon slots, interactive loading states,
 * and polymorphic rendering via the `as` prop.
 */
export function Button<E extends ElementType = typeof defaultType>({
  as,
  color,
  variant,
  radius,
  size,
  retainFocusState = true,
  disabled = false,
  selected = false,
  scaling = true,
  loading = false,
  loadingPosition = "start",
  startIcon,
  endIcon,
  className,
  wrapperClassName,
  useGroup = true,
  style,
  children,
  ...rest
}: ButtonProps<E>) {
  const theme = useTheme();
  const foundGroup = useButtonGroupContext();
  const group = useGroup ? foundGroup : null;
  const isIcon =
    (startIcon !== undefined || endIcon !== undefined) && !children;
  const isDisabled = disabled || loading;
  const { classes, resolvedColor, wrapperClasses } = getButtonClasses({
    retainFocusState,
    variant,
    size,
    isIcon,
    scaling,
    disabled: isDisabled,
    radius,
    color,
    className,
    wrapperClassName,
    theme,
    group,
  });

  const Element = as || defaultType;
  const elementProps = {
    ...(isDisabled && Element === "button" ? { disabled: true } : {}),
    ...(isDisabled && Element !== "button"
      ? { "aria-disabled": true as const, tabIndex: -1 as const }
      : {}),
  };

  const ariaLabel = rest["aria-label"];
  const ariaLabeledBy = rest["aria-labelledby"];
  if (!ariaLabel && !ariaLabeledBy && !children) {
    console.warn("Provide an aria-label for buttons without text!");
  }

  return (
    <span className={wrapperClasses}>
      <Element
        aria-label={ariaLabel}
        aria-labelledby={ariaLabeledBy}
        data-selected={selected ? selected : undefined}
        style={{ ...cssColorProps(resolvedColor), ...style }}
        className={classes}
        {...elementProps}
        {...rest}
      >
        <>
          {(!loading || loadingPosition !== "start") && startIcon}
          {loading && loadingPosition === "start" && <Spinner />}
          {children}
          {(!loading || loadingPosition !== "end") && endIcon}
          {loading && loadingPosition === "end" && <Spinner />}
        </>
      </Element>
    </span>
  );
}
