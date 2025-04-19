import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const lsThemeName = "theme";
export const darkTheme = "dark";
export const lightTheme = "light";
export const systemTheme = "system";
export const matchMedia = "(prefers-color-scheme: dark)";

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
  let initialTheme: ThemeModeType = systemTheme;
  useEffect(() => {
    const lsTheme = localStorage.getItem(lsThemeName);
    initialTheme =
      lsTheme === darkTheme
        ? darkTheme
        : lsTheme === lightTheme
          ? lightTheme
          : systemTheme;
  }, []);

  const [themeMode, setThemeMode] = useState<ThemeModeType>(initialTheme);
  const [isDark, setIsDark] = useState(themeMode === darkTheme);

  useEffect(() => {
    const onPrefersChange = (event: MediaQueryListEvent) => {
      setThemeMode((prevState) => {
        if (prevState === systemTheme) {
          const { classList } = document.documentElement;
          if (event.matches) {
            classList.add(darkTheme);
            setIsDark(true);
          } else {
            classList.remove(darkTheme);
            setIsDark(false);
          }
        }
        return prevState;
      });
    };

    window
      .matchMedia(matchMedia)
      .addEventListener("change", onPrefersChange, true);

    return () => {
      window
        .matchMedia(matchMedia)
        .removeEventListener("change", onPrefersChange);
    };
  }, [themeMode]);

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
    throw new Error("You need a DarkModeContext to use the useDarkMode hook!");
  }

  const { themeMode, isDark, setThemeMode } = context;
  return { themeMode, isDark, setThemeMode };
}
