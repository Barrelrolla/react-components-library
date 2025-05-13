import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import {
  darkModeName,
  lightModeName,
  systemModeName,
  useTheme,
} from "@/contexts";
import { Button, ButtonGroup, ButtonGroupProps } from "../Button";

/** Provides an option to choose between light, dark and system theme. */
export function DarkModeSelector({
  variant = "outline",
  size = "sm",
  divider = false,
  ...rest
}: ButtonGroupProps) {
  const theme = useTheme();
  if (!theme) {
    throw new Error("Dark Mode Selector requires a Theme Provider!");
  }
  const { darkMode, setDarkMode } = theme;

  return (
    <ButtonGroup variant={variant} size={size} divider={divider} {...rest}>
      <Button
        aria-label="ligth theme mode"
        selected={darkMode === lightModeName}
        onClick={() => setDarkMode(lightModeName)}
        startIcon={<SunIcon />}
      ></Button>
      <Button
        aria-label="dark theme mode"
        selected={darkMode === darkModeName}
        onClick={() => setDarkMode(darkModeName)}
        startIcon={<MoonIcon />}
      ></Button>
      <Button
        aria-label="system theme mode"
        selected={darkMode === systemModeName}
        onClick={() => setDarkMode(systemModeName)}
        startIcon={<ComputerIcon />}
      ></Button>
    </ButtonGroup>
  );
}
