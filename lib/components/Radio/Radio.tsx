import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getRadioClasses } from "./getRadioClasses";
import { EmptyCircleIcon, CircleCheckIcon } from "@/icons";
import { useRadioGroupContext } from "./RadioGroupContext";

export type RadioProps = {
  color?: ColorType;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  defaultChecked?: boolean;
  wrapperClassName?: string;
  size?: number;
} & ComponentProps<"input">;

export function Radio({
  color,
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
    checkedClasses,
    unCheckedClasses,
    labelClasses,
    wrapperClasses,
  } = getRadioClasses({
    color,
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
    ...cssColorPropsReversed(resolvedColor),
    ...style,
  };
  const labelStyles = {
    "--size": `${groupSize}px`,
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
      <CircleCheckIcon className={checkedClasses} style={styles} />
      <EmptyCircleIcon style={styles} className={unCheckedClasses} />

      {children && (
        <span style={labelStyles} className={labelClasses}>
          {children}
        </span>
      )}
    </label>
  );
}
