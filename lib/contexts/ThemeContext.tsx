import { ColorType } from "@/types";
import { createContext, useContext } from "react";

export type ThemeContextType =
  | {
      primaryColor: ColorType;
      secondaryColor: ColorType;
      linksPrimaryColor: ColorType;
      linksSecondaryColor: ColorType;
      transitions: boolean;
      scalingButtons: boolean;
    }
  | undefined;

const ThemeContext = createContext<ThemeContextType>(undefined);
export const ThemeContextProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
