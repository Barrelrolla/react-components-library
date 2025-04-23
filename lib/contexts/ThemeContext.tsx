import { createContext, PropsWithChildren, useContext } from "react";
import { DarkModeContextProvider } from "./DarkModeContext";
import { InputRadius } from "@/types";

export type ThemeContextType =
  | {
      inputsRadius?: InputRadius;
      transitions?: boolean;
      scalingButtons?: boolean;
      buttonsRetainFocus?: boolean;
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
