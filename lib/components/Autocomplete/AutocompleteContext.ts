import { createContext, RefObject, useContext } from "react";
import { FloatingElementContextType } from "../Floating";
import { ReactVirtualizer } from "@tanstack/react-virtual";

export interface AutocompleteContextType extends FloatingElementContextType {
  rowVirtualizer: ReactVirtualizer<HTMLDivElement, Element>;
  listRef: RefObject<(HTMLElement | null)[]>;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  filteredItems: string[];
  query: string;
  setQuery: (query: string) => void;
}

const AutocompleteContext = createContext<AutocompleteContextType | null>(null);
export const AutocompleteContextProvider = AutocompleteContext.Provider;

export function useAutocompleteContext() {
  return useContext(AutocompleteContext);
}
