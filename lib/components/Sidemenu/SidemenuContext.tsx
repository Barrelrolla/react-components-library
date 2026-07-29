import { createContext, useContext } from "react";

export type SidemenuContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
} | null;

const SidemenuContext = createContext<SidemenuContextType>(null);
export const SidemenuContextProvider = SidemenuContext.Provider;

export function useSidemenuContext() {
  return useContext(SidemenuContext);
}
