import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { useRadioStyles } from "./useRadioStyles";
import { Circle, CircleCheck } from "@/icons";
import { useRadioGroupContext } from "./RadioGroupContext";

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
  color,
  labelColor,
  size = 20,
  style,
  labelStyle,
  labelClasses,
  className,
  name,
  children,
  ...rest
}: RadioProps) {
  const {
    resolvedColor,
    resolvedLabelColor,
    checkedClasses,
    unCheckedClasses,
    labelClass,
    wrapperClass,
  } = useRadioStyles({
    color,
    labelColor,
    className,
    labelClasses,
  });
  const context = useRadioGroupContext();
  const groupName = context?.name ?? name;
  const groupSize = context?.size ?? size;
  const styles = {
    "--size": `${groupSize}px`,
    ...cssColorProps(resolvedColor),
    ...style,
  };
  const labelStyles = {
    "--size": `${groupSize}px`,
    ...cssColorProps(resolvedLabelColor),
    ...labelStyle,
  };

  return (
    <label className={wrapperClass}>
      <input
        name={groupName}
        type="radio"
        className="peer appearance-none"
        {...rest}
      />
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
