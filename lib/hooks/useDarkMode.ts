import { useEffect, useState } from "react";

export function useDarkMode() {
  const lsThemeName = "theme" as const;
  const darkTheme = "dark" as const;
  const lightTheme = "light" as const;
  const systemTheme = "system" as const;
  const matchMedia = "(prefers-color-scheme: dark)";

  const [theme, setTheme] = useState(
    localStorage.getItem(lsThemeName) || systemTheme,
  );

  function setUserTheme(event: MediaQueryListEvent) {
    if (theme === systemTheme) {
      const { classList } = document.documentElement;
      if (event.matches) {
        classList.add(darkTheme);
      } else {
        classList.remove(darkTheme);
      }
    }
  }

  useEffect(() => {
    window.matchMedia(matchMedia).addEventListener("change", setUserTheme);

    return window
      .matchMedia(matchMedia)
      .removeEventListener("change", setUserTheme);
  }, []);

  useEffect(() => {
    console.log("hook");
    const { classList } = document.documentElement;
    if (theme === darkTheme) {
      classList.add(darkTheme);
      localStorage.setItem(lsThemeName, darkTheme);
    } else if (theme === lightTheme) {
      classList.remove(darkTheme);
      localStorage.setItem(lsThemeName, lightTheme);
    } else {
      localStorage.setItem(lsThemeName, systemTheme);
      if (window.matchMedia(matchMedia).matches) {
        classList.add(darkTheme);
      } else {
        classList.remove(darkTheme);
      }
    }
  }, [theme]);

  return { theme, setTheme };
}
