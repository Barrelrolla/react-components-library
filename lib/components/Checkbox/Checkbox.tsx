import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getCheckboxClasses } from "./getCheckboxClasses";
import { EmtpySquareIcon, SquareCheckIcon } from "@/icons";

export type CheckboxProps = {
  /** Color variant of the checkbox. */
  color?: ColorType;
  /** Inline CSS properties applied to the label element. */
  labelStyle?: CSSProperties;
  /** Additional CSS class names applied to the label element. */
  labelClassName?: string;
  /** Initial check state. */
  defaultChecked?: boolean;
  /** Additional CSS class names applied to the outer input wrapper element. */
  wrapperClassName?: string;
  /** Dimensions/size indicator of the checkbox element (in pixels). */
  size?: number;
} & ComponentProps<"input">;

/** Customizable checkbox component with support for theme color variants, custom sizes, and built-in label styling. */
export function Checkbox({
  color = "primary",
  size = 24,
  disabled,
  style,
  labelStyle,
  labelClassName,
  wrapperClassName,
  className,
  children,
  ...rest
}: CheckboxProps) {
  const { checkedClasses, unCheckedClasses, labelClasses, wrapperClasses } =
    getCheckboxClasses({
      disabled,
      className,
      labelClassName,
      wrapperClassName,
    });
  const styles = {
    "--size": `${size}px`,
    ...cssColorPropsReversed(color),
    ...style,
  };
  const labelStyles = {
    "--size": `${size}px`,
    ...labelStyle,
  };
  return (
    <label className={wrapperClasses}>
      <input
        disabled={disabled}
        type="checkbox"
        className="peer appearance-none"
        {...rest}
      />
      <SquareCheckIcon className={checkedClasses} style={styles} />
      <EmtpySquareIcon className={unCheckedClasses} style={styles} />

      {children && (
        <span style={labelStyles} className={labelClasses}>
          {children}
        </span>
      )}
    </label>
  );
}
