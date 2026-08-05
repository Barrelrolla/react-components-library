import { ColorType } from "@/types";
import { createContext, useContext } from "react";

export type SidemenuContextType = {
  color: ColorType;
  activeIndex: number;
  fillOnSelect: boolean;
  setActiveIndex: (index: number) => void;
} | null;

const SidemenuContext = createContext<SidemenuContextType>(null);
export const SidemenuContextProvider = SidemenuContext.Provider;

export function useSidemenuContext() {
  return useContext(SidemenuContext);
}
