import { ElementType, SVGProps } from "react";
import { Spinner } from "@/icons";
import { ColorType, PolymorphicProps, SizeType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { ButtonRadius, ButtonVariant, GhostHover } from "./buttonTypes";
import { useButtonStyles } from "./useButtonStyles";

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
  /** If the button variant is `ghost` you can select the hover type. */
  ghostHover?: GhostHover;
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
  startIcon?: SVGProps<SVGSVGElement>;
  /** Same as start icon, but at the end. */
  endIcon?: SVGProps<SVGSVGElement>;
  /** The button is wrapped in a div to change the cursor when disabled. If you need to pass any classes to that div, you can do so with this prop. */
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
  loading = false,
  loadingPosition = "start",
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
  const { styles, resolvedColor, wrapperStyles } = useButtonStyles({
    retainFocusState,
    variant,
    ghostHover,
    size,
    isIcon,
    scaling,
    disabled: isDisabled,
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
        style={{ ...cssColorPropsReversed(resolvedColor), ...style }}
        className={styles}
        disabled={isDisabled}
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
