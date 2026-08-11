import { createContext, useContext } from "react";
import { ColorType, SizeType } from "@/types";
import { ButtonRadius, ButtonVariant } from "./buttonTypes";

export type ButtonGroupContextType = {
  /** Color variant applied across all child buttons in the group. */
  color?: ColorType;
  /** Visual variant style applied across all child buttons in the group. */
  variant?: ButtonVariant;
  /** Indicates whether child buttons maintain their focus state following user interactions. */
  retainFocusState?: boolean;
  /** Border radius styling applied to the outer edges of the button group. */
  radius?: ButtonRadius;
  /** Sizing variant applied across all child buttons in the group. */
  size?: SizeType;
  /** Indicates whether child buttons trigger a press scaling animation on click or touch. */
  scaling?: boolean;
  /** When `true`, arranges the child buttons vertically instead of horizontally. */
  vertical?: boolean;
} | null;

const ButtonGroupContext = createContext<ButtonGroupContextType>(null);
/**
 * Context provider that distributes shared layout, sizing, color, and behavior settings
 * to all nested button components within a `ButtonGroup`.
 */
export const ButtonGroupContextProvider = ButtonGroupContext.Provider;

export function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}
