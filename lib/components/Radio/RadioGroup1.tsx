import { ComponentProps } from "react";
import { RadioGroupContextProvider } from "./RadioGroupContext";
import { RadioProps } from "./Radio";

export type RadioGroupProps = {
  name: string;
  title: string;
} & ComponentProps<"fieldset"> &
  RadioProps;

export function RadioGroup({
  title,
  name,
  color,
  labelColor,
  size,
  children,
  ...rest
}: RadioGroupProps) {
  return (
    <RadioGroupContextProvider value={{ name, color, labelColor, size }}>
      <fieldset {...rest}>
        <legend>{title}</legend>
        {children}
      </fieldset>
    </RadioGroupContextProvider>
  );
}
