import { createContext, useContext } from "react";
import { ColorType } from "@/types";

export type RadioGroupContextType =
  | {
      name: string;
      color?: ColorType;
      labelColor?: ColorType;
      size?: number;
    }
  | undefined;

const RadioGroupContext = createContext<RadioGroupContextType>(undefined);
export const RadioGroupContextProvider = RadioGroupContext.Provider;

export function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}
