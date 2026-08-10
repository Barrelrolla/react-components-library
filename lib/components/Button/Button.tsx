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
  /** Color of the button. If none is chosen it will be `primary`. */
  color?: ColorType;
  /** Button variant. If none is set it will be `solid`. */
  variant?: ButtonVariant;
  /** Button size. If none is set it will be `md`. */
  size?: SizeType;
  /** Button radius. If none is set it will use the theme's default. */
  radius?: ButtonRadius;
  /** By default, while the button is focused, it will retain it's hover state, meaning an outline or ghost button will remain solid for example. Set to `false` if you don't want that behaviour. */
  retainFocusState?: boolean;
  /** By default buttons scale on press. Set to `false` if you don't want that. */
  scaling?: boolean;
  /** Used to disable the button. */
  disabled?: boolean;
  /** In a button group for example, you can set this property to the currently selected button. */
  selected?: boolean;
  /** Set to `true` when submitting a form for example. The button will show a loading indicator. */
  loading?: boolean;
  /** If the loading indicator should be shown in the start or end of the button. */
  loadingPosition?: "start" | "end";
  /** Start icon. You can just pass an icon in the children, but using this prop will automatically replace that icon for a loading one if the `loading` prop is set to `true`. */
  startIcon?: ReactNode;
  /** Same as start icon, but at the end. */
  endIcon?: ReactNode;
  /** The button is wrapped in a div to change the cursor when disabled. If you need to pass any classes to that div, you can do so with this prop. */
  wrapperClassName?: string;
  useGropup?: boolean;
} & PolymorphicProps<E>;

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
  useGropup = true,
  style,
  children,
  ...rest
}: ButtonProps<E>) {
  const theme = useTheme();
  const foundGroup = useButtonGroupContext();
  const group = useGropup ? foundGroup : null;
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

  const ariaLabel = rest["aria-label"] || "false";
  const ariaDescribed = rest["aria-describedby"];
  if (!ariaLabel && !ariaDescribed && !children) {
    console.warn("Provide an aria-label for buttons without text!");
  }

  return (
    <span className={wrapperClasses}>
      <Element
        aria-label={ariaLabel}
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
