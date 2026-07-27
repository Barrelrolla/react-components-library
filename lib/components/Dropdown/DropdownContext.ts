import {
  createContext,
  Dispatch,
  HTMLProps,
  RefObject,
  SetStateAction,
  useContext,
} from "react";
import { FloatingElementContextType } from "../Floating";

interface DropdownContextType extends FloatingElementContextType {
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  hasFocusInside: boolean;
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
  listRef: RefObject<(HTMLElement | null)[]>;
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>;
  parent: DropdownContextType | null;
}

const DropdownContext = createContext<DropdownContextType | null>(null);
export const DropdownContextProvider = DropdownContext.Provider;

export function useDropdownContext() {
  return useContext(DropdownContext);
}
