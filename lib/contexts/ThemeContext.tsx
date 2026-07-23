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
  typeof lightModeName | typeof darkModeName | typeof systemModeName;

export type ThemeContextProps = {
  scalingButtons?: boolean;
  buttonsRetainFocus?: boolean;
};
export type ThemeContextType =
  | ({
      theme: string | undefined;
      setTheme: (theme: string) => void;
      darkMode: DarkModeType | undefined;
      isDark: boolean | undefined;
      setDarkMode: (themeMode: DarkModeType) => void;
    } & ThemeContextProps)
  | null;

const ThemeContext = createContext<ThemeContextType>(null);
export function ThemeContextProvider({
  value,
  children,
}: { value?: ThemeContextProps } & PropsWithChildren) {
  const [theme, setTheme] = useState<string | undefined>(undefined);
  const [darkMode, setDarkMode] = useState<DarkModeType | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const lsDarkMode = localStorage.getItem(lsDarkModeName);
    const lsTheme = localStorage.getItem(lsThemeName);
    setDarkMode((lsDarkMode as DarkModeType) || systemModeName);
    if (lsTheme) {
      setTheme(lsTheme);
    }
  }, []);

  useEffect(() => {
    const onPrefersChange = (event: MediaQueryListEvent) => {
      setDarkMode((prevState) => {
        if (prevState === systemModeName) {
          const { classList } = document.documentElement;
          if (event.matches) {
            classList.add(darkModeName);
            document.cookie = `${lsDarkModeName}=${darkModeName}`;
            setIsDark(true);
          } else {
            classList.remove(darkModeName);
            document.cookie = `${lsDarkModeName}=${lightModeName}`;
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
    if (!darkMode) {
      return;
    }

    const { classList } = document.documentElement;
    if (darkMode === darkModeName) {
      classList.add(darkModeName);
      localStorage.setItem(lsDarkModeName, darkModeName);
      document.cookie = `${lsDarkModeName}=${darkModeName}`;
      setIsDark(true);
    } else if (darkMode === lightModeName) {
      classList.remove(darkModeName);
      localStorage.setItem(lsDarkModeName, lightModeName);
      document.cookie = `${lsDarkModeName}=${lightModeName}`;
      setIsDark(false);
    } else {
      localStorage.setItem(lsDarkModeName, systemModeName);
      if (window.matchMedia(matchMedia).matches) {
        classList.add(darkModeName);
        document.cookie = `${lsDarkModeName}=${darkModeName}`;
        setIsDark(true);
      } else {
        classList.remove(darkModeName);
        document.cookie = `${lsDarkModeName}=${lightModeName}`;
        setIsDark(false);
      }
    }
  }, [darkMode]);

  function setThemeFromOutside(theme: string) {
    const { dataset } = document.documentElement;
    if (theme) {
      dataset.theme = theme;
      localStorage.setItem(lsThemeName, theme);
      setTheme(theme);
    } else {
      dataset.theme = undefined;
      localStorage.removeItem(lsThemeName);
      setTheme(undefined);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        darkMode,
        setTheme: setThemeFromOutside,
        setDarkMode,
        scalingButtons:
          value?.scalingButtons !== undefined ? value.scalingButtons : true,
        buttonsRetainFocus:
          value?.buttonsRetainFocus !== undefined
            ? value.buttonsRetainFocus
            : true,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
