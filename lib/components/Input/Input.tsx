import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
  useCallback,
  useId,
  useRef,
} from "react";
import { getInputClasses } from "./getInputClasses";
import { Button } from "../Button";
import { useRepeatAction } from "@/hooks/useRepeatAction";
import { MinusIcon, PlusIcon } from "@/icons";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";

type InputFieldType = "input" | "textarea";

export type InputProps<T extends InputFieldType = "input"> = {
  as?: T;
  /** Color of the texts and outlines. */
  color?: ColorType;
  /** Type of the input. Only text based types are accepted. */
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
  /** Label of the input. */
  label?: string;
  /** Icon that will be placed inside the input field before the input text. */
  startIcon?: ReactNode;
  /** Icon that will be placed inside the input field after the input text. */
  endIcon?: ReactNode;
  /** Disabled the input field. */
  disabled?: boolean;
  /** Error message that will appear under the input. */
  error?: string;
  /** Used to apply classes to the label. */
  labelClassName?: string;
  /** Used to apply classes to the error message. */
  errorClassName?: string;
  /** Used to apply classes to the whole wrapper. */
  wrapperClassName?: string;
  /** Style for the wrapper. */
  wrapperStyle?: CSSProperties;
  /** Used to apply classes to the input and icons container. */
  inputContainerClassName?: string;
  /** Input conainer style. */
  inputContainerStyle?: CSSProperties;
} & ComponentPropsWithoutRef<T>;

/** The input has a wrapper, which holds the label and the error message. Also a container, which holds the input itself, and any icons that should appear inside the input field. */
export function Input<T extends InputFieldType = "input">({
  as,
  color = "primary",
  type,
  disabled = false,
  label,
  startIcon,
  endIcon,
  error,
  labelClassName,
  errorClassName,
  wrapperClassName,
  wrapperStyle,
  inputContainerClassName,
  inputContainerStyle,
  className,
  ...rest
}: InputProps<T>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    classes,
    labelClasses,
    errorClasses,
    wrapperClasses,
    inputContainerClasses,
  } = getInputClasses({
    startIcon: startIcon != undefined,
    endIcon: endIcon != undefined,
    className,
    wrapperClassName,
    labelClassName,
    errorClassName,
    inputContainerClassName,
  });

  const id = useId();

  const elementProps = {
    className: classes,
    disabled,
    id,
    type,
    "data-error": error ? true : undefined,
    "aria-describedby": id && error ? `${id}-error` : undefined,
  };

  const handleStep = useCallback(
    (direction: "up" | "down") => {
      const input = inputRef.current;
      if (!input || disabled) {
        return;
      }

      const step = Number(input.step) || 1;
      const min = input.min !== "" ? Number(input.min) : -Infinity;
      const max = input.max !== "" ? Number(input.max) : Infinity;
      const currentValue = Number(input.value) || 0;

      let newValue =
        direction === "up" ? currentValue + step : currentValue - step;
      newValue = Math.max(min, Math.min(max, newValue));

      input.value = newValue.toString();
    },
    [disabled],
  );

  const stepUp = useCallback(() => handleStep("up"), [handleStep]);
  const stepDown = useCallback(() => handleStep("down"), [handleStep]);

  const stepUpProps = useRepeatAction(stepUp);
  const stepDownProps = useRepeatAction(stepDown);
  const resolvedColor = error ? "error" : color;

  return (
    <div
      className={wrapperClasses}
      style={{ ...cssColorProps(resolvedColor), ...wrapperStyle }}
    >
      <label className={labelClasses} htmlFor={id}>
        <span className="block">{label}</span>
        <div className={inputContainerClasses} style={inputContainerStyle}>
          {startIcon && (
            <div className="input-start-icon">
              <>{startIcon}</>
            </div>
          )}
          {as === "textarea" ? (
            <textarea
              {...(elementProps as ComponentPropsWithoutRef<"textarea">)}
              {...(rest as ComponentPropsWithoutRef<"textarea">)}
            />
          ) : (
            <input
              ref={inputRef}
              {...(elementProps as ComponentPropsWithoutRef<"input">)}
              {...(rest as ComponentPropsWithoutRef<"input">)}
            />
          )}
          {endIcon && (
            <div className="input-end-icon">
              <>{endIcon}</>
            </div>
          )}
          {type === "number" && (
            <>
              <Button
                className="text-inherit"
                disabled={disabled}
                tabIndex={-1}
                variant="ghost"
                size="xs"
                {...stepDownProps}
              >
                <MinusIcon strokeWidth={16} />
              </Button>
              <Button
                className="text-inherit"
                disabled={disabled}
                tabIndex={-1}
                variant="ghost"
                size="xs"
                {...stepUpProps}
              >
                <PlusIcon strokeWidth={16} />
              </Button>
            </>
          )}
        </div>
      </label>
      {error && (
        <p id={`${id}-error`} className={errorClasses}>
          {error}
        </p>
      )}
    </div>
  );
}
