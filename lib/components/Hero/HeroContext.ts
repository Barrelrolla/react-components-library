import { createContext, useContext } from "react";
import { ResponsiveSizes } from "@/types";
import { HeroAlign } from "./HeroTypes";

export type HeroContextType = {
  /** Text alignment strategy for headings and body copy within the hero. */
  textAlign: HeroAlign;
  /** Alignment strategy for action elements, such as buttons or links. */
  actionsAlign: HeroAlign;
  /** Breakpoint size at which responsive alignment shifts between mobile and desktop modes. */
  responsiveAt: ResponsiveSizes;
} | null;

const HeroContext = createContext<HeroContextType>(null);
/**
 * Context provider that distributes alignment rules and responsive breakpoint settings
 * from a `Hero` container to nested subcomponents like `HeroTitle`, `HeroText`, and `HeroActions`.
 */
export const HeroContextProvider = HeroContext.Provider;

export function useHeroContext() {
  return useContext(HeroContext);
}
