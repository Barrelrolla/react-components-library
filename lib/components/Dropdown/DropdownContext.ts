import {
  createContext,
  Dispatch,
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
  labelsRef: RefObject<(string | null)[]>;
  parent: DropdownContextType | null;
}

const DropdownContext = createContext<DropdownContextType | null>(null);
export const DropdownContextProvider = DropdownContext.Provider;

export function useDropdownContext() {
  return useContext(DropdownContext);
}
