import { Button, ButtonGroup, ButtonGroupProps } from "../Button";
import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import { useDarkMode } from "@/contexts";

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
        selected={themeMode === "light"}
        onClick={() => setThemeMode("light")}
        icon={<SunIcon />}
      ></Button>
      <Button
        selected={themeMode === "dark"}
        onClick={() => setThemeMode("dark")}
        icon={<MoonIcon />}
      ></Button>
      <Button
        selected={themeMode === "system"}
        onClick={() => setThemeMode("system")}
        icon={<ComputerIcon />}
      ></Button>
    </ButtonGroup>
  );
}
