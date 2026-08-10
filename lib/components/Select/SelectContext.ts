import { createContext, RefObject, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

interface SelectContextType extends FloatingElementContextType {
  items: string[];
  multiple: boolean;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  selectedIndex: number | undefined;
  selectedIndices: number[];
  setSelected: (index: number | undefined) => void;
  listRef: RefObject<(HTMLElement | null)[]>;
  labelsRef: RefObject<(string | null)[]>;
}
const SelectContext = createContext<SelectContextType | null>(null);
export const SelectContextProvider = SelectContext.Provider;

export function useSelectContext() {
  return useContext(SelectContext);
}
