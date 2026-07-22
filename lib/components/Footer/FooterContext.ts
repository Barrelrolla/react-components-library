import { createContext, useContext } from "react";
import { ColorType, ResponsiveSizes } from "@/types";

export type FooterContextProps = {
  color: ColorType;
  responsiveAt: ResponsiveSizes;
} | null;

const FooterContext = createContext<FooterContextProps>(null);

export const FooterContextProvider = FooterContext.Provider;

export function useFooterContext() {
  return useContext(FooterContext);
}
