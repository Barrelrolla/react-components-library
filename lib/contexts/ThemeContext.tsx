import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const darkModeName = "dark";
export const lightModeName = "light";
export const systemModeName = "system";
const lsThemeName = "theme";
const lsDarkModeName = "darkMode";
const matchMedia = "(prefers-color-scheme: dark)";

export type DarkModeType =
  | typeof lightModeName
  | typeof darkModeName
  | typeof systemModeName;

export type ThemeContextProps = {
  scalingButtons?: boolean;
  buttonsRetainFocus?: boolean;
};
export type ThemeContextType =
  | ({
      theme: string | undefined;
      setTheme: (theme: string) => void;
      darkMode: DarkModeType;
      isDark: boolean;
      setDarkMode: (themeMode: DarkModeType) => void;
    } & ThemeContextProps)
  | undefined;

const ThemeContext = createContext<ThemeContextType>(undefined);
export function ThemeContextProvider({
  value,
  children,
}: { value?: ThemeContextProps } & PropsWithChildren) {
  let initialTheme: string | undefined = undefined;
  let initialDarkMode: DarkModeType = systemModeName;
  const lsDarkMode = localStorage.getItem(lsDarkModeName);
  const lsTheme = localStorage.getItem(lsThemeName);
  initialDarkMode = (lsDarkMode as DarkModeType) || systemModeName;
  initialTheme = lsTheme || undefined;

  const [theme, setTheme] = useState<string | undefined>(initialTheme);
  const [darkMode, setDarkMode] = useState<DarkModeType>(initialDarkMode);
  const [isDark, setIsDark] = useState(darkMode === darkModeName);

  useEffect(() => {
    const onPrefersChange = (event: MediaQueryListEvent) => {
      setDarkMode((prevState) => {
        if (prevState === systemModeName) {
          const { classList } = document.documentElement;
          if (event.matches) {
            classList.add(darkModeName);
            setIsDark(true);
          } else {
            classList.remove(darkModeName);
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
  }, [darkMode]);

  useEffect(() => {
    const { classList } = document.documentElement;
    if (darkMode === darkModeName) {
      classList.add(darkModeName);
      localStorage.setItem(lsDarkModeName, darkModeName);
      setIsDark(true);
    } else if (darkMode === lightModeName) {
      classList.remove(darkModeName);
      localStorage.setItem(lsDarkModeName, lightModeName);
      setIsDark(false);
    } else {
      localStorage.setItem(lsDarkModeName, systemModeName);
      if (window.matchMedia(matchMedia).matches) {
        classList.add(darkModeName);
        setIsDark(true);
      } else {
        classList.remove(darkModeName);
        setIsDark(false);
      }
    }
  }, [darkMode]);

  useEffect(() => {
    const { dataset } = document.documentElement;
    if (theme) {
      dataset.theme = theme;
      localStorage.setItem(lsThemeName, theme);
    } else {
      dataset.theme = undefined;
      localStorage.removeItem(lsThemeName);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        darkMode,
        setTheme,
        setDarkMode,
        scalingButtons:
          value?.scalingButtons !== undefined ? value.scalingButtons : true,
        buttonsRetainFocus:
          value?.buttonsRetainFocus !== undefined ? value.scalingButtons : true,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
