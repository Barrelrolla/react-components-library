import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getRadioClasses } from "./getRadioClasses";
import { EmptyCircleIcon, CircleCheckIcon } from "@/icons";
import { useRadioGroupContext } from "./RadioGroupContext";

export type RadioProps = {
  /** Color variant applied to the radio button when selected. */
  color?: ColorType;
  /** Custom inline CSS properties applied directly to the radio label text element. */
  labelStyle?: CSSProperties;
  /** Additional CSS class names applied to the radio label text element. */
  labelClassName?: string;
  /** Initial selection state when operated in an uncontrolled mode. */
  defaultChecked?: boolean;
  /** Additional CSS class names applied to the outer wrapper container element. */
  wrapperClassName?: string;
  /** Custom size in pixels defining the width and height dimensions of the radio button. */
  size?: number;
} & ComponentProps<"input">;

/**
 * Single radio button input component that allows users to select one option from a set.
 *
 * Renders an accessible form input wrapped with custom styling, supporting color variants,
 * customizable sizing, label customization, and standard controlled or uncontrolled HTML input behavior.
 */
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
