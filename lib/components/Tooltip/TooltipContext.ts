import { ColorType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { createContext, Ref, useContext } from "react";

export type TooltipContextType =
  | {
      color: ColorType;
      isOpen: boolean;
      setIsOpen: (open: boolean) => void;
      data: UseFloatingReturn;
      interactions: UseInteractionsReturn;
      disabled?: boolean;
      hasArrow?: boolean;
      arrowRef?: Ref<SVGSVGElement> | undefined;
    }
  | undefined;

const TooltipContext = createContext<TooltipContextType>(undefined);
export const TooltipContextProvider = TooltipContext.Provider;

export function useTooltipContext() {
  return useContext(TooltipContext);
}
