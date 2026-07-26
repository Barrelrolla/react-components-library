import { ComponentProps } from "react";
import { RadioGroupContextProvider } from "./RadioGroupContext";
import { RadioProps } from "./Radio";

export type RadioGroupProps = {
  name: string;
  title: string;
  legendClassName?: string;
} & ComponentProps<"fieldset"> &
  RadioProps;

export function RadioGroup({
  title,
  name,
  legendClassName,
  color,
  labelColor,
  size,
  children,
  ...rest
}: RadioGroupProps) {
  return (
    <RadioGroupContextProvider value={{ name, color, labelColor, size }}>
      <fieldset {...rest}>
        <legend className={legendClassName}>{title}</legend>
        {children}
      </fieldset>
    </RadioGroupContextProvider>
  );
}
