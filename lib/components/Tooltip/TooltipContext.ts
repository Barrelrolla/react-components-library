import { createContext, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

const TooltipContext = createContext<FloatingElementContextType | null>(null);
export const TooltipContextProvider = TooltipContext.Provider;

export function useTooltipContext() {
  return useContext(TooltipContext);
}
