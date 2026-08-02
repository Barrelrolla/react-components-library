import { createContext, ReactNode, RefObject, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

interface SelectContextType extends FloatingElementContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  selectedValue: string | undefined;
  setSelectedValue: (value: string | undefined) => void;
  selectedItem: ReactNode;
  setSelectedItem: (item: ReactNode) => void;
  listRef: RefObject<(HTMLElement | null)[]>;
  labelsRef: RefObject<(string | null)[]>;
}
const SelectContext = createContext<SelectContextType | null>(null);
export const SelectContextProvider = SelectContext.Provider;

export function useSelectContext() {
  return useContext(SelectContext);
}
