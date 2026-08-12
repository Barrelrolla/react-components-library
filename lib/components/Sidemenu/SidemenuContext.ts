import { ColorType } from "@/types";
import { createContext, useContext } from "react";

export type SidemenuContextType = {
  /** Color variant inherited by all child sidemenu item components. */
  color: ColorType;
  /** Zero-based index of the currently active navigation item. */
  activeIndex: number;
  /** Determines whether selected items render with a solid background fill or a subtle tint. */
  fillOnSelect: boolean;
  /** State updater function to change the active menu item index. */
  setActiveIndex: (index: number) => void;
} | null;

const SidemenuContext = createContext<SidemenuContextType>(null);
/** sidemenu context provider */
export const SidemenuContextProvider = SidemenuContext.Provider;

export function useSidemenuContext() {
  return useContext(SidemenuContext);
}
