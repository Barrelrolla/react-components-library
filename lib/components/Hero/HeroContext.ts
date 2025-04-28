import { ResponsiveSizes } from "@/types";
import { createContext, useContext } from "react";
import { HeroAlign } from "./HeroTypes";

/** Context holding data for components inside a Hero */
export type HeroContextType =
  | {
      /** Select if text should be left or center aligned. By default it's left aligned on big screens and center on small ones. */
      textAlign: HeroAlign;
      /** Same as `textAlign` but for actions. */
      actionsAlign: HeroAlign;
      /** The size at which the component should change alignment. */
      responsiveAt: ResponsiveSizes;
    }
  | undefined;

const HeroContext = createContext<HeroContextType>(undefined);
export const HeroContextProvider = HeroContext.Provider;

export function useHeroContext() {
  return useContext(HeroContext);
}
