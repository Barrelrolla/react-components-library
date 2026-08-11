import {
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
} from "react";
import { FloatingElementContextType } from "../Floating";

interface DropdownContextType extends FloatingElementContextType {
  /** Index of the currently highlighted or focused menu item, or `null` if none. */
  activeIndex: number | null;
  /** State updater to set the index of the active menu item. */
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  /** Indicates whether keyboard focus is currently contained within the dropdown menu tree. */
  hasFocusInside: boolean;
  /** State updater to track whether focus is inside the dropdown menu tree. */
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
  /** React ref tracking DOM node references for each focusable item in the dropdown list. */
  listRef: RefObject<(HTMLElement | null)[]>;
  /** React ref storing text labels for each item, used to support typeahead keyboard navigation. */
  labelsRef: RefObject<(string | null)[]>;
  /** Reference to the parent dropdown context, enabling nested or cascading dropdown menus. */
  parent: DropdownContextType | null;
}

const DropdownContext = createContext<DropdownContextType | null>(null);
/**
 * Context provider that manages floating positioning, active index focus tracking,
 * typeahead labels, and hierarchical nested menu support for dropdown components.
 */
export const DropdownContextProvider = DropdownContext.Provider;

export function useDropdownContext() {
  return useContext(DropdownContext);
}
