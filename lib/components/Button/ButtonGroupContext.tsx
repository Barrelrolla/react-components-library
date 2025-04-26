import { createContext, useContext } from "react";
import { ColorType, SizeType } from "@/types";
import { ButtonRadius, ButtonVariant, GhostHover } from "./buttonTypes";

export type ButtonGroupContextType =
  | {
      color?: ColorType;
      variant?: ButtonVariant;
      ghostHover?: GhostHover;
      retainFocusState?: boolean;
      radius?: ButtonRadius;
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
