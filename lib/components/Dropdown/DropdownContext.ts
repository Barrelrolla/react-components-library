import { ColorType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import {
  createContext,
  Dispatch,
  HTMLProps,
  Ref,
  RefObject,
  SetStateAction,
  useContext,
} from "react";

export type DropdownContextType =
  | {
      color: ColorType;
      isOpen: boolean;
      setIsOpen: (open: boolean) => void;
      isNested: boolean;
      activeIndex: number | null;
      setActiveIndex: Dispatch<SetStateAction<number | null>>;
      hasFocusInside: boolean;
      setHasFocusInside: Dispatch<SetStateAction<boolean>>;
      data: UseFloatingReturn;
      interactions: UseInteractionsReturn;
      listRef: RefObject<(HTMLElement | null)[]>;
      disabled?: boolean;
      hasArrow?: boolean;
      arrowRef?: Ref<SVGSVGElement> | undefined;
      getItemProps: (
        userProps?: HTMLProps<HTMLElement>,
      ) => Record<string, unknown>;
      parent: DropdownContextType;
    }
  | undefined;

const DropdownContext = createContext<DropdownContextType>(undefined);
export const DropdownContextProvider = DropdownContext.Provider;

export function useDropdownContext() {
  return useContext(DropdownContext);
}
