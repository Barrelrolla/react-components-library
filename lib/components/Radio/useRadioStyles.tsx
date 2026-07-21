import { twMerge } from "tailwind-merge";
import { useRadioGroupContext } from "./RadioGroupContext";
import { ColorType } from "@/types";

export function useRadioStyles({
  color,
  labelColor,
  className,
  labelClasses,
  wrapperClasses,
}: {
  color?: ColorType;
  labelColor?: ColorType;
  className?: string;
  labelClasses?: string;
  wrapperClasses?: string;
}) {
  const groupContext = useRadioGroupContext();
  const resolvedColor = groupContext?.color || color || "primary";
  const resolvedLabelColor = groupContext?.labelColor || labelColor || "main";
  return {
    resolvedColor,
    resolvedLabelColor,
    checkedClasses: twMerge(
      "radio opacity-0 peer-checked:opacity-100",
      className,
    ),
    unCheckedClasses: twMerge("radio", className),
    labelClass: twMerge("ml-(--size) text-(--fg-color)", labelClasses),
    wrapperClass: twMerge("radio-wrapper", wrapperClasses),
  };
}
