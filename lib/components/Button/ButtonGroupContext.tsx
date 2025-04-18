import { createContext, useContext } from "react";
import { ColorType } from "@/types";
import { ButtonVariantProps } from "./buttonTypes";

export type ButtonGroupContextType =
  | ({
      color?: ColorType;
    } & ButtonVariantProps)
  | undefined;

const ButtonGroupContext = createContext<ButtonGroupContextType>(undefined);
export const ButtonGroupContextProvider = ButtonGroupContext.Provider;

export function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}
