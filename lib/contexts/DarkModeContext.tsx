import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const lsThemeName = "theme";
const darkTheme = "dark";
const lightTheme = "light";
const systemTheme = "system";
const matchMedia = "(prefers-color-scheme: dark)";

export type ThemeModeType =
  | typeof lightTheme
  | typeof darkTheme
  | typeof systemTheme;

export type DarkModeContextProps =
  | {
      isDark: boolean;
      themeMode: ThemeModeType;
      setThemeMode: (themeMode: ThemeModeType) => void;
    }
  | undefined;
const DarkModeContext = createContext<DarkModeContextProps>(undefined);

export function DarkModeContextProvider({ children }: PropsWithChildren) {
  const lsTheme = localStorage.getItem(lsThemeName);
  const currentTheme: ThemeModeType =
    lsTheme === "dark" ? "dark" : lsTheme === "light" ? "light" : "system";

  const [isDark, setIsDark] = useState(currentTheme === darkTheme);
  const [themeMode, setThemeMode] = useState<ThemeModeType>(currentTheme);

  function setPreferredTheme(event: MediaQueryListEvent) {
    if (themeMode === systemTheme) {
      const { classList } = document.documentElement;
      if (event.matches) {
        classList.add(darkTheme);
      } else {
        classList.remove(darkTheme);
      }
    }
  }

  useEffect(() => {
    window.matchMedia(matchMedia).addEventListener("change", setPreferredTheme);

    return window
      .matchMedia(matchMedia)
      .removeEventListener("change", setPreferredTheme);
  }, []);

  useEffect(() => {
    const { classList } = document.documentElement;
    if (themeMode === darkTheme) {
      classList.add(darkTheme);
      localStorage.setItem(lsThemeName, darkTheme);
      setIsDark(true);
    } else if (themeMode === lightTheme) {
      classList.remove(darkTheme);
      localStorage.setItem(lsThemeName, lightTheme);
      setIsDark(false);
    } else {
      localStorage.setItem(lsThemeName, systemTheme);
      if (window.matchMedia(matchMedia).matches) {
        classList.add(darkTheme);
        setIsDark(true);
      } else {
        classList.remove(darkTheme);
        setIsDark(false);
      }
    }
  }, [themeMode]);

  return (
    <DarkModeContext.Provider
      value={{
        isDark,
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(
      "Please use the useDarkMode hook only inside DarkModeContext",
    );
  }

  const { isDark, themeMode, setThemeMode } = context;
  return { isDark, themeMode, setThemeMode };
}
