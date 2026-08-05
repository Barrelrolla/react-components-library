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
