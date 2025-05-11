import { createContext, useContext } from "react";
import { ColorType, SizeType } from "@/types";
import { ButtonRadius, ButtonVariant, GhostHover } from "./buttonTypes";

export type ButtonGroupContextType =
  | {
      /** Color of the buttons. */
      color?: ColorType;
      /** Variant of the buttons. */
      variant?: ButtonVariant;
      /** Hover variant if the buttons are of `ghost` variant. */
      ghostHover?: GhostHover;
      /** If the buttons should retains focus state. */
      retainFocusState?: boolean;
      /** Radius of the button group. */
      radius?: ButtonRadius;
      /** Size of the buttons. */
      size?: SizeType;
      /** If the buttons should scale on press. */
      scaling?: boolean;
      /** Set to `true` to make it a vertical aligned group. */
      vertical?: boolean;
    }
  | undefined;

const ButtonGroupContext = createContext<ButtonGroupContextType>(undefined);
export const ButtonGroupContextProvider = ButtonGroupContext.Provider;

export function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}
