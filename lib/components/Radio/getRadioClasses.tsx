import { twMerge } from "tailwind-merge";
import { RadioGroupContextType } from "./RadioGroupContext";
import { ColorType } from "@/types";

export function getRadioClasses({
  disabled,
  color,
  labelColor,
  className,
  labelClassName,
  wrapperClassName,
  groupContext,
}: {
  disabled?: boolean;
  color?: ColorType;
  labelColor?: ColorType;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  groupContext: RadioGroupContextType;
}) {
  const resolvedColor = groupContext?.color || color || "primary";
  const resolvedLabelColor = groupContext?.labelColor || labelColor || "main";
  return {
    resolvedColor,
    resolvedLabelColor,
    checkedClasses: twMerge(
      "radio opacity-0 peer-checked:opacity-100 disabled:opacity-50",
      !disabled && "radio-highlights",
      className,
    ),
    unCheckedClasses: twMerge(
      "radio peer-disabled:opacity-50",
      !disabled && "radio-highlights",
      className,
    ),
    labelClasses: twMerge(
      "ml-(--size) text-(--fg-color) peer-disabled:opacity-50",
      !disabled && "radio-highlights",
      labelClassName,
    ),
    wrapperClasses: twMerge(
      "radio-wrapper",
      disabled && "cursor-not-allowed",
      wrapperClassName,
    ),
  };
}
