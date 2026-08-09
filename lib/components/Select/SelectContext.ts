import { createContext, ReactNode, RefObject, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

interface SelectContextType extends FloatingElementContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  selectedValue: string | undefined;
  setSelected: (value: string | undefined, item: ReactNode) => void;
  selectedValues: string[];
  listRef: RefObject<(HTMLElement | null)[]>;
  labelsRef: RefObject<(string | null)[]>;
  multiple: boolean;
}
const SelectContext = createContext<SelectContextType | null>(null);
export const SelectContextProvider = SelectContext.Provider;

export function useSelectContext() {
  return useContext(SelectContext);
}
