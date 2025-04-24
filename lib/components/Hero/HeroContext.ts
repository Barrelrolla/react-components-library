import { ResponsiveSizes } from "@/types";
import { createContext, useContext } from "react";
import { HeroAlign } from "./HeroTypes";

export type HeroContextType =
  | {
      textAlign: HeroAlign;
      actionsAlign: HeroAlign;
      responsiveAt: ResponsiveSizes;
    }
  | undefined;

const HeroContext = createContext<HeroContextType>(undefined);
export const HeroContextProvider = HeroContext.Provider;

export function useHeroContext() {
  return useContext(HeroContext);
}
