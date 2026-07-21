import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { useRadioStyles } from "./useRadioStyles";
import { Circle, CircleCheck } from "@/icons";

export type RadioProps = {
  color?: ColorType;
  labelColor?: ColorType;
  labelStyle?: CSSProperties;
  labelClasses?: string;
  defaultChecked?: boolean;
  wrapperClasses?: string;
  size?: number;
} & ComponentProps<"input">;

export function Radio({
  color = "primary",
  labelColor = "main",
  size = 20,
  style,
  labelStyle,
  labelClasses,
  className,
  children,
  ...rest
}: RadioProps) {
  const { checkedClasses, unCheckedClasses, labelClass, wrapperClass } =
    useRadioStyles({
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
      <input type="radio" className="peer appearance-none" {...rest} />
      <CircleCheck className={checkedClasses} style={styles} />
      <Circle style={styles} className={unCheckedClasses} />

      {children && (
        <span style={labelStyles} className={labelClass}>
          {children}
        </span>
      )}
    </label>
  );
}
