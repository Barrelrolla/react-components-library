import { Button, ButtonProps } from "../Button";
import { useDarkMode } from "@/contexts";
import { darkTheme, lightTheme } from "@/contexts/DarkModeContext";
import { MoonIcon, SunIcon } from "@/icons";

export function DarkModeToggle({
  size = "sm",
  ...rest
}: ButtonProps<"button">) {
  const { isDark, setThemeMode } = useDarkMode();
  return (
    <Button
      onClick={() => setThemeMode(isDark ? lightTheme : darkTheme)}
      startIcon={isDark ? <SunIcon /> : <MoonIcon />}
      size={size}
      {...rest}
    />
  );
}
