import { Button } from "../Button";
import { useDarkMode } from "@/contexts";
import { darkTheme, lightTheme } from "@/contexts/DarkModeContext";
import { MoonIcon, SunIcon } from "@/icons";

export function DarkModeToggle() {
  const { isDark, setThemeMode } = useDarkMode();
  return (
    <Button
      onClick={() => setThemeMode(isDark ? lightTheme : darkTheme)}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      size="sm"
    />
  );
}
