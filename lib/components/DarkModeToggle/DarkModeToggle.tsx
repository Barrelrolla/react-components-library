import { Button } from "../Button";
import { useDarkMode } from "@/contexts";
import { MoonIcon, SunIcon } from "@/icons";

export function DarkModeToggle() {
  const { isDark, setThemeMode } = useDarkMode();
  return (
    <Button
      onClick={() => setThemeMode(isDark ? "light" : "dark")}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      size="sm"
    />
  );
}
