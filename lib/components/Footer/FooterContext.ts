import { createContext, useContext } from "react";
import { ColorType, ResponsiveSizes } from "@/types";

export type FooterContextProps =
  | {
      color: ColorType;
      responsiveAt: ResponsiveSizes;
    }
  | undefined;

const FooterContext = createContext<FooterContextProps>(undefined);

export const FooterContextProvider = FooterContext.Provider;

export function useFooterContext() {
  return useContext(FooterContext);
}
