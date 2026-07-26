import { createContext, useContext } from "react";
import { ColorType, ResponsiveSizes } from "@/types";

export type FooterContextType = {
  color: ColorType;
  responsiveAt: ResponsiveSizes;
} | null;

const FooterContext = createContext<FooterContextType>(null);

export const FooterContextProvider = FooterContext.Provider;

export function useFooterContext() {
  return useContext(FooterContext);
}
