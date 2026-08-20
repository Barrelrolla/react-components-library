import { createContext, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

const PopoverContext = createContext<FloatingElementContextType | null>(null);
/**
 * Context provider that distributes popover positioning data, interaction handlers,
 * visibility state, color variant choices, and arrow references to nested popover subcomponents.
 */
export const PopoverContextProvider = PopoverContext.Provider;

export function usePopoverContext() {
  return useContext(PopoverContext);
}
