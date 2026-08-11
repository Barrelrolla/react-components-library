import { ComponentProps } from "react";
import { RadioGroupContextProvider } from "./RadioGroupContext";
import { RadioProps } from "./Radio";

export type RadioGroupProps = {
  /** Form name attribute applied to all child radio button inputs within the group. */
  name: string;
  /** Accessible title rendered inside the fieldset legend element. */
  title: string;
  /** Additional CSS class names applied directly to the legend element. */
  legendClassName?: string;
} & ComponentProps<"fieldset"> &
  RadioProps;

/**
 * Accessible grouping wrapper that organizes multiple radio buttons within an HTML `<fieldset>`.
 *
 * Provides a unified legend title for assistive technologies and propagates shared
 * group properties—such as input `name` and color variants—down to nested radio options.
 */
export function RadioGroup({
  title,
  name,
  legendClassName,
  color = "primary",
  size,
  children,
  ...rest
}: RadioGroupProps) {
  return (
    <RadioGroupContextProvider value={{ name, color, size }}>
      <fieldset {...rest}>
        <legend className={legendClassName}>{title}</legend>
        {children}
      </fieldset>
    </RadioGroupContextProvider>
  );
}
