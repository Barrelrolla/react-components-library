import { createContext, PropsWithChildren, useContext } from "react";
import { DarkModeContextProvider } from "./DarkModeContext";
import { ColorType } from "@/types";

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
export function ThemeContextProvider({
  value,
  children,
}: { value: ThemeContextType } & PropsWithChildren) {
  return (
    <DarkModeContextProvider>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </DarkModeContextProvider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
