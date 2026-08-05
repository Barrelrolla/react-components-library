import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getCheckboxClasses } from "./getCheckboxClasses";
import { EmtpySquareIcon, SquareCheckIcon } from "@/icons";

export type CheckboxProps = {
  color?: ColorType;
  labelColor?: ColorType;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  defaultChecked?: boolean;
  wrapperClassName?: string;
  size?: number;
} & ComponentProps<"input">;

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
