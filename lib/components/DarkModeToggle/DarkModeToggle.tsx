import { useDarkMode } from "@/hooks";
import { MoonIcon, SunIcon } from "../../icons/icons";
import { Button } from "../Button";

export function DarkModeToggle() {
  const { theme, setTheme } = useDarkMode();
  let isDark = false;
  if (theme === "dark") {
    isDark = true;
  } else if (theme === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      isDark = true;
    }
  }
  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      size="sm"
    />
  );
}
