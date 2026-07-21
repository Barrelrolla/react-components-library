import { ComponentProps, CSSProperties, useState } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { useCheckboxStyles } from "./useCheckboxStyles";
import { Square, SquareCheck } from "@/icons";

export type CheckboxProps = {
  color?: ColorType;
  labelColor?: ColorType;
  labelStyle?: CSSProperties;
  labelClasses?: string;
  defaultChecked?: boolean;
  wrapperClasses?: string;
  size?: number;
} & ComponentProps<"input">;

export function Checkbox({
  color = "primary",
  labelColor = "main",
  defaultChecked = false,
  size = 24,
  style,
  labelStyle,
  labelClasses,
  className,
  children,
  ...rest
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const { checkedClasses, unCheckedClasses, labelClass, wrapperClass } =
    useCheckboxStyles({
      className,
      labelClasses,
    });
  const styles = { "--size": `${size}px`, ...cssColorProps(color), ...style };
  const labelStyles = {
    "--size": `${size}px`,
    ...cssColorProps(labelColor),
    ...labelStyle,
  };
  return (
    <label className={wrapperClass}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="peer appearance-none"
        {...rest}
      />
      <SquareCheck className={checkedClasses} style={styles} />
      <Square style={styles} className={unCheckedClasses} />

      {children && (
        <span style={labelStyles} className={labelClass}>
          {children}
        </span>
      )}
    </label>
  );
}
