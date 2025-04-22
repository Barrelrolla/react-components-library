import { createContext, useContext } from "react";
import { ColorType, InputRadius, SizeType } from "@/types";
import { ButtonVariant, GhostHover } from "./buttonTypes";

export type ButtonGroupContextType =
  | {
      color?: ColorType;
      variant?: ButtonVariant;
      ghostHover?: GhostHover;
      radius?: InputRadius;
      size?: SizeType;
      scaling?: boolean;
      transitions?: boolean;
      vertical?: boolean;
    }
  | undefined;

const ButtonGroupContext = createContext<ButtonGroupContextType>(undefined);
export const ButtonGroupContextProvider = ButtonGroupContext.Provider;

export function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}
