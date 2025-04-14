import { createContext, useContext } from "react";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { ColorType, SizeType } from "@/types";

export type ButtonGroupContextType =
  | {
      variant: ButtonVariant;
      radius: ButtonRadius;
      clearButtonHover: ClearButtonHover;
      primaryColor?: ColorType;
      secondaryColor?: ColorType;
      size: SizeType;
      contrasting: boolean;
      vertical: boolean;
    }
  | undefined;

const ButtonGroupContext = createContext<ButtonGroupContextType>(undefined);
export const ButtonGroupContextProvider = ButtonGroupContext.Provider;

export function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}
