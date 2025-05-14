import { darkModeName, lightModeName, useTheme } from "@/contexts";
import { MoonIcon, SunIcon } from "@/icons";
import { Button, ButtonProps } from "../Button";

/** Toggles between light and dark theme. */
export function DarkModeToggle({
  size = "sm",
  ...rest
}: ButtonProps<"button">) {
  const theme = useTheme();
  if (!theme) {
    throw new Error("Dark mode toggle requires a ThemeContext.");
  }
  const { isDark, setDarkMode } = theme;
  return (
    <Button
      aria-label="dark mode toggle"
      onClick={() => setDarkMode(isDark ? lightModeName : darkModeName)}
      startIcon={isDark ? <SunIcon /> : <MoonIcon />}
      size={size}
      {...rest}
    />
  );
}
