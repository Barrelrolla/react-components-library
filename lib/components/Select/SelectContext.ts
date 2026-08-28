import { createContext, RefObject, useContext } from "react";
import { FloatingElementContextType } from "../Floating";
import { SelectItem } from "./types";

interface SelectContextType extends FloatingElementContextType {
  /** Array of string option items available for selection within the dropdown list. */
  items: SelectItem[];
  /** Indicates whether the select component is operating in multi-selection mode. */
  multiple: boolean;
  /** Index of the option item currently highlighted or focused via keyboard navigation. */
  activeIndex: number | null;
  /** State updater function to update the currently highlighted or active option index. */
  setActiveIndex: (index: number | null) => void;
  /** Zero-based index of the currently selected item in single-selection mode. */
  selectedIndex: number | undefined;
  /** Array of zero-based indices for all currently selected items in multi-selection mode. */
  selectedIndices: number[];
  /** Callback function to toggle or update selected item indices. */
  setSelected: (index: number | undefined) => void;
  /** React ref storing array references to registered DOM option elements for focus trapping. */
  listRef: RefObject<(HTMLElement | null)[]>;
  /** React ref storing textual labels for options to support typeahead and keyboard search. */
  labelsRef: RefObject<(string | null)[]>;
  /** React ref storing the trigger element, so focus can returned. */
  triggerRef: RefObject<HTMLElement | null>;
}
const SelectContext = createContext<SelectContextType | null>(null);
/**
 * Context provider that distributes option item data, selection states, active focus indices,
 * and DOM reference arrays down to nested select subcomponents.
 */
export const SelectContextProvider = SelectContext.Provider;

export function useSelectContext() {
  return useContext(SelectContext);
}
