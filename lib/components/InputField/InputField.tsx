import { ComponentProps, SVGProps, useRef } from "react";
import { ColorType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { useInputFieldStyles } from "./useInputFieldStyles";

export type InputFieldProps = {
  /** Color of the texts and outlines. */
  color?: ColorType;
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

export function InputField({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  color,
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
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    styles,
    labelStyles,
    errorStyles,
    wrapperStyles,
    inputContainerStyles,
  } = useInputFieldStyles({
    startIcon: startIcon != undefined,
    endIcon: endIcon != undefined,
    className,
    wrapperClasses,
    labelClasses,
    errorClasses,
    inputContainerClasses,
  });

  function handleIconClick() {
    inputRef.current?.focus();
  }

  let styleVars = {};
  if (color) {
    styleVars = cssColorPropsReversed(color);
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
          <div tabIndex={-1} className="ps-2" onClick={handleIconClick}>
            <>{startIcon}</>
          </div>
        )}
        <input
          ref={inputRef}
          type="text"
          aria-describedby={`${id}-error`}
          className={styles}
          id={id}
          {...rest}
        />
        {endIcon && (
          <div tabIndex={-1} className="pe-2" onClick={handleIconClick}>
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
