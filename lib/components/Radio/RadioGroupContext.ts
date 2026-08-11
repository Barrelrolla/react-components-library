import { createContext, useContext } from "react";
import { ColorType } from "@/types";

export type RadioGroupContextType = {
  /** Form name attribute shared across all nested radio button inputs within the group. */
  name: string;
  /** Color variant inherited by all child radio button components in the group. */
  color?: ColorType;
  /** Sizing dimension in pixels inherited by all child radio button components in the group. */
  size?: number;
} | null;

const RadioGroupContext = createContext<RadioGroupContextType>(null);
/**
 * Context provider that distributes shared configuration state—such as group `name`,
 * color variant choices, and button sizes—down to child `Radio` components within a `RadioGroup`.
 */
export const RadioGroupContextProvider = RadioGroupContext.Provider;

export function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}
