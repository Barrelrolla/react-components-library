import { useDarkMode, darkTheme, lightTheme } from "@/contexts";
import { MoonIcon, SunIcon } from "@/icons";
import { Button, ButtonProps } from "../Button";

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
