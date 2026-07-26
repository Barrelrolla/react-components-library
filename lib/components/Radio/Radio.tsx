import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { getRadioClasses } from "./getRadioClasses";
import { Circle, CircleCheck } from "@/icons";
import { useRadioGroupContext } from "./RadioGroupContext";

export type RadioProps = {
  color?: ColorType;
  labelColor?: ColorType;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  defaultChecked?: boolean;
  wrapperClassName?: string;
  size?: number;
} & ComponentProps<"input">;

export function Radio({
  color,
  labelColor,
  size = 20,
  disabled,
  style,
  labelStyle,
  labelClassName,
  wrapperClassName,
  className,
  name,
  children,
  ...rest
}: RadioProps) {
  const groupContext = useRadioGroupContext();
  const {
    resolvedColor,
    resolvedLabelColor,
    checkedClasses,
    unCheckedClasses,
    labelClasses,
    wrapperClasses,
  } = getRadioClasses({
    color,
    labelColor,
    className,
    labelClassName,
    wrapperClassName,
    groupContext,
    disabled,
  });
  const groupName = groupContext?.name ?? name;
  const groupSize = groupContext?.size ?? size;
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
    <label className={wrapperClasses}>
      <input
        disabled={disabled}
        name={groupName}
        type="radio"
        className="peer appearance-none"
        {...rest}
      />
      <CircleCheck className={checkedClasses} style={styles} />
      <Circle style={styles} className={unCheckedClasses} />

      {children && (
        <span style={labelStyles} className={labelClasses}>
          {children}
        </span>
      )}
    </label>
  );
}
