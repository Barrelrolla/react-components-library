import { createContext, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

const TooltipContext = createContext<FloatingElementContextType | null>(null);
/**
 * Context provider that distributes tooltip positioning, open/close visibility states,
 * event handlers, and accessibility bindings down to `TooltipTrigger` and `TooltipContent` subcomponents.
 */
export const TooltipContextProvider = TooltipContext.Provider;

export function useTooltipContext() {
  return useContext(TooltipContext);
}
