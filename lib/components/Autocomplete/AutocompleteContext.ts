import { createContext, RefObject, useContext } from "react";
import { FloatingElementContextType } from "../Floating";
import { ReactVirtualizer } from "@tanstack/react-virtual";

export interface AutocompleteContextType extends FloatingElementContextType {
  /** Full list of selectable string options available to the autocomplete. */
  items: string[];
  /** Virtualizer instance managing virtualized scrolling for large item lists. */
  rowVirtualizer: ReactVirtualizer<HTMLDivElement, Element>;
  /** React ref tracking DOM node references for each rendered list item. */
  listRef: RefObject<(HTMLElement | null)[]>;
  /** Index of the currently highlighted/focused item in the list, or `null` if none. */
  activeIndex: number | null;
  /** Callback to update the active highlighted item index. */
  setActiveIndex: (index: number | null) => void;
  /** Index of the currently selected item for single-selection modes, or `null` if none. */
  selectedIndex?: number | null;
  /** Array of item indices currently selected for multi-selection modes. */
  selectedIndices?: number[];
  /** Subset of `items` matching the current search query filter. */
  filteredItems: string[];
  /** Current text search query entered by the user. */
  query: string;
  /** Callback triggered when an item option is selected. */
  onSelectItem: (activeItem: string) => void;
  /** Ref to the trigger div, used to calculate the width and return focus. */
  triggerRef?: RefObject<HTMLDivElement | null>;
}

const AutocompleteContext = createContext<AutocompleteContextType | null>(null);
/**
 * Context provider that supplies autocomplete state, virtualization controls,
 * focus tracking, and selection handlers to child autocomplete components.
 */
export const AutocompleteContextProvider = AutocompleteContext.Provider;

export function useAutocompleteContext() {
  return useContext(AutocompleteContext);
}
