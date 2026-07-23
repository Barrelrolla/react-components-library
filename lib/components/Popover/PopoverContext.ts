import { ColorType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { createContext, Ref, useContext } from "react";

export type PopoverContextType =
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

const PopoverContext = createContext<PopoverContextType>(undefined);
export const PopoverContextProvider = PopoverContext.Provider;

export function usePopoverContext() {
  return useContext(PopoverContext);
}
