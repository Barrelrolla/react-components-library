import { ColorType } from "@/types";
import { createContext, useContext } from "react";

export type FooterContextProps =
  | {
      color: ColorType;
    }
  | undefined;

const FooterContext = createContext<FooterContextProps>(undefined);

export const FooterContextProvider = FooterContext.Provider;

export function useFooterContext() {
  return useContext(FooterContext);
}
