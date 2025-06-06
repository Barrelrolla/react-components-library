import { ComponentProps, SVGProps } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { useInputStyles } from "./useInputStyles";

export type InputProps = {
  /** Color of the texts and outlines. */
  color?: ColorType;
  /** If `true` will apply a bg fill on the input in the same color */
  bgFill?: boolean;
  /** Type of the input. Only text based types are accepted. */
  type?: "text" | "email" | "password" | "tel" | "url";
  /** Label of the input. */
  label?: string;
  /** Icon that will be placed inside the input field before the input text. */
  startIcon?: SVGProps<SVGSVGElement>;
  /** Icon that will be placed inside the input field after the input text. */
  endIcon?: SVGProps<SVGSVGElement>;
  /** Error message that will appear under the input. */
  error?: string;
  /** Used to apply classes to the label. */
  labelClasses?: string;
  /** Used to apply classes to the error message. */
  errorClasses?: string;
  /** Used to apply classes to the whole wrapper. */
  wrapperClasses?: string;
  /** Used to apply classes to the input and icons wrapper. */
  inputContainerClasses?: string;
} & ComponentProps<"input">;

export function Input({
  type = "text",
  color,
  bgFill = false,
  label,
  startIcon,
  endIcon,
  error,
  labelClasses,
  errorClasses,
  wrapperClasses,
  inputContainerClasses,
  id,
  className,
  ...rest
}: InputProps) {
  const {
    styles,
    labelStyles,
    errorStyles,
    wrapperStyles,
    inputContainerStyles,
  } = useInputStyles({
    bgFill,
    startIcon: startIcon != undefined,
    endIcon: endIcon != undefined,
    className,
    wrapperClasses,
    labelClasses,
    errorClasses,
    inputContainerClasses,
  });

  let styleVars = {};
  if (color) {
    styleVars = cssColorProps(color);
  }

  return (
    <div className={wrapperStyles} style={styleVars}>
      {label && (
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={inputContainerStyles}>
        {startIcon && (
          <div className="absolute start-0 ps-2 pointer-events-none">
            <>{startIcon}</>
          </div>
        )}
        <input
          type={type}
          aria-describedby={id ? `${id}-error` : ""}
          className={styles}
          id={id}
          {...rest}
        />
        {endIcon && (
          <div className="absolute end-0 pe-2 pointer-events-none">
            <>{endIcon}</>
          </div>
        )}
      </div>
      {error && (
        <div id={`${id}-error`} className={errorStyles}>
          {error}
        </div>
      )}
    </div>
  );
}
