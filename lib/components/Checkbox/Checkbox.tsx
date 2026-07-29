import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { getCheckboxClasses } from "./getCheckboxClasses";
import { Square, SquareCheck } from "@/icons";

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
  color = "main",
  labelColor = "main",
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
  const styles = { "--size": `${size}px`, ...cssColorProps(color), ...style };
  const labelStyles = {
    "--size": `${size}px`,
    ...cssColorProps(labelColor),
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
      <SquareCheck className={checkedClasses} style={styles} />
      <Square style={styles} className={unCheckedClasses} />

      {children && (
        <span style={labelStyles} className={labelClasses}>
          {children}
        </span>
      )}
    </label>
  );
}
