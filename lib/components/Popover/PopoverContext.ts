import { ColorType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { createContext, CSSProperties, Ref, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

export interface PopoverContextType extends FloatingElementContextType {
  color: ColorType;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  data: UseFloatingReturn;
  interactions: UseInteractionsReturn;
  transitionStyles: CSSProperties;
  disabled?: boolean;
  hasArrow?: boolean;
  arrowRef?: Ref<SVGSVGElement> | undefined;
}

const PopoverContext = createContext<PopoverContextType | null>(null);
export const PopoverContextProvider = PopoverContext.Provider;

export function usePopoverContext() {
  return useContext(PopoverContext);
}
