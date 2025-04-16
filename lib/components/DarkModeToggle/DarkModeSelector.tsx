import { Button, ButtonGroup, ButtonGroupProps } from "../Button";
import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import { useDarkMode } from "@/contexts";
import { darkTheme, lightTheme, systemTheme } from "@/contexts/DarkModeContext";

export function DarkModeSelector({
  variant = "outline",
  size = "sm",
  divider = false,
  ...rest
}: ButtonGroupProps) {
  const { themeMode, setThemeMode } = useDarkMode();
  return (
    <ButtonGroup variant={variant} size={size} divider={divider} {...rest}>
      <Button
        selected={themeMode === lightTheme}
        onClick={() => setThemeMode(lightTheme)}
        icon={<SunIcon />}
      ></Button>
      <Button
        selected={themeMode === darkTheme}
        onClick={() => setThemeMode(darkTheme)}
        icon={<MoonIcon />}
      ></Button>
      <Button
        selected={themeMode === systemTheme}
        onClick={() => setThemeMode(systemTheme)}
        icon={<ComputerIcon />}
      ></Button>
    </ButtonGroup>
  );
}
