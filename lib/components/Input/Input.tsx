import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
  Ref,
  useCallback,
  useId,
  useRef,
  useState,
} from "react";
import { getInputClasses } from "./getInputClasses";
import { Button, useButtonGroupContext } from "../Button";
import { useRepeatAction } from "@/hooks/useRepeatAction";
import { ClosedEyeIcon, MinusIcon, OpenEyeIcon, PlusIcon } from "@/icons";
import { ColorType, SizeType } from "@/types";
import { cssColorProps } from "@/util";
import { useMergeRefs } from "@floating-ui/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

type InputFieldType = "input" | "textarea";

export type InputProps<T extends InputFieldType = "input"> = {
  /** Color variant applied to borders, text, and focus states. */
  color?: ColorType;
  /** Input size option. */
  size?: SizeType;
  /** HTML input type attribute for supported text-based formats. */
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
  /** Descriptive label rendered above the input field. */
  label?: string;
  /** Visual icon component placed inside the input field preceding the text value. */
  startIcon?: ReactNode;
  /** Visual icon component placed inside the input field following the text value. */
  endIcon?: ReactNode;
  /** Disables user interaction and applies disabled visual styling. */
  disabled?: boolean;
  /** Validation error text rendered beneath the input field. */
  error?: string;
  /** Additional CSS class names applied to the field label element. */
  labelClassName?: string;
  /** Additional CSS class names applied to the error message text. */
  errorClassName?: string;
  /** Additional CSS class names applied to the outermost container wrapper. */
  wrapperClassName?: string;
  /** Inline CSS properties applied to the outermost container wrapper. */
  wrapperStyle?: CSSProperties;
  /** Additional CSS class names applied to the internal container wrapping the input element and icons. */
  inputContainerClassName?: string;
  /** Inline CSS properties applied to the internal container wrapping the input element and icons. */
  inputContainerStyle?: CSSProperties;
  /** Accessible label applied to the + button that increases the number input value by 1. */
  stepUpAriaLabel?: string;
  /** Accessible label applied to the - button that decreases the number input value by 1. */
  stepDownAriaLabel?: string;
  /** ARIA label applied to the password visibility toggle button for assistive technologies. */
  revealPasswordToggleAriaLabel?: string;
  /** When `true`, displays an interactive icon button inside the input field allowing users to toggle password visibility. */
  showRevealPasswordButton?: boolean;
  /** Underlying form element tag to render, allowing toggle between standard single-line `input` and multi-line `textarea`. Defaults to `input`. */
  as?: T;
  /** Ref attached to the rendered HTML input or textarea element. */
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;
} & ComponentPropsWithoutRef<T>;

/**
 * Form input component with built-in support for labels, validation errors, inline icons, and multi-line textareas.
 *
 * Includes an outer wrapper for external positioning and label/error alignment, and an inner container
 * managing inline visual elements alongside the standard HTML input or textarea element.
 */
export function Input<T extends InputFieldType = "input">({
  color,
  size,
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
  stepUpAriaLabel,
  stepDownAriaLabel,
  revealPasswordToggleAriaLabel,
  showRevealPasswordButton = true,
  as,
  ref,
  id,
  ...rest
}: InputProps<T>) {
  const [isRevealing, setIsRevealing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const mergedRefs = useMergeRefs([inputRef, ref]);
  const group = useButtonGroupContext();

  const {
    classes,
    labelClasses,
    errorClasses,
    wrapperClasses,
    inputContainerClasses,
    resolvedColor,
  } = getInputClasses({
    color: error ? "error" : color,
    size,
    disabled,
    startIcon: startIcon != undefined,
    endIcon: endIcon != undefined,
    className,
    wrapperClassName,
    labelClassName,
    errorClassName,
    inputContainerClassName,
    group,
  });

  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const resolvedType = isRevealing ? "text" : type;

  const elementProps = {
    ref: mergedRefs,
    className: classes,
    disabled,
    id: resolvedId,
    type: resolvedType,
    "data-error": error ? true : undefined,
    "aria-describedby": error ? `${resolvedId}-error` : undefined,
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

      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set;

      nativeSetter?.call(input, newValue.toString());

      input.dispatchEvent(new Event("input", { bubbles: true }));
    },
    [disabled],
  );

  const stepUp = useCallback(() => handleStep("up"), [handleStep]);
  const stepDown = useCallback(() => handleStep("down"), [handleStep]);

  const stepUpProps = useRepeatAction(stepUp);
  const stepDownProps = useRepeatAction(stepDown);

  return (
    <div
      className={wrapperClasses}
      style={{ ...cssColorProps(resolvedColor), ...wrapperStyle }}
    >
      <label className={labelClasses} htmlFor={resolvedId}>
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
              {...(elementProps as ComponentPropsWithoutRef<"input">)}
              {...(rest as ComponentPropsWithoutRef<"input">)}
            />
          )}
          {endIcon && (
            <div className="input-end-icon">
              <>{endIcon}</>
            </div>
          )}
          {type === "password" && showRevealPasswordButton && (
            <Tooltip isLabel>
              <TooltipTrigger>
                <Button
                  aria-label={revealPasswordToggleAriaLabel}
                  type="button"
                  className="text-inherit"
                  wrapperClassName="mr-1"
                  tabIndex={-1}
                  size="xs"
                  variant="ghost"
                  disabled={disabled}
                  startIcon={isRevealing ? <OpenEyeIcon /> : <ClosedEyeIcon />}
                  useGroup={false}
                  onClick={() => {
                    setIsRevealing(!isRevealing);
                  }}
                />
              </TooltipTrigger>
              <TooltipContent>{revealPasswordToggleAriaLabel}</TooltipContent>
            </Tooltip>
          )}
          {type === "number" && (
            <>
              <Button
                aria-label={stepDownAriaLabel}
                type="button"
                className="text-inherit"
                disabled={disabled}
                tabIndex={-1}
                variant="ghost"
                size="xs"
                startIcon={<MinusIcon strokeWidth={16} />}
                useGroup={false}
                {...stepDownProps}
              />
              <Button
                aria-label={stepUpAriaLabel}
                type="button"
                className="text-inherit"
                disabled={disabled}
                tabIndex={-1}
                variant="ghost"
                size="xs"
                useGroup={false}
                {...stepUpProps}
              >
                <PlusIcon strokeWidth={16} />
              </Button>
            </>
          )}
        </div>
      </label>
      {error && (
        <p id={`${resolvedId}-error`} className={errorClasses}>
          {error}
        </p>
      )}
    </div>
  );
}
