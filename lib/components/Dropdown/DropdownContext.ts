import { ColorType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { createContext, Ref, RefObject, useContext } from "react";

export type DropdownContextType =
  | {
      color: ColorType;
      isOpen: boolean;
      setIsOpen: (open: boolean) => void;
      data: UseFloatingReturn;
      interactions: UseInteractionsReturn;
      activeIndex: number | null;
      listRef: RefObject<(HTMLElement | null)[]>;
      disabled?: boolean;
      hasArrow?: boolean;
      arrowRef?: Ref<SVGSVGElement> | undefined;
    }
  | undefined;

const DropdownContext = createContext<DropdownContextType>(undefined);
export const DropdownContextProvider = DropdownContext.Provider;

export function useDropdownContext() {
  return useContext(DropdownContext);
}
