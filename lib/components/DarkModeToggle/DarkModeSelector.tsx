import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import { Button, ButtonGroup, ButtonGroupProps } from "../Button";
import { useDarkMode } from "@/hooks";
export function DarkModeSelector({
  variant = "outline",
  size = "sm",
  divider = false,
  ...rest
}: ButtonGroupProps) {
  const { theme, setTheme } = useDarkMode();
  return (
    <ButtonGroup variant={variant} size={size} divider={divider} {...rest}>
      <Button
        selected={theme === "light"}
        onClick={() => setTheme("light")}
        icon={<SunIcon />}
      ></Button>
      <Button
        selected={theme === "dark"}
        onClick={() => setTheme("dark")}
        icon={<MoonIcon />}
      ></Button>
      <Button
        selected={theme === "system"}
        onClick={() => setTheme("system")}
        icon={<ComputerIcon />}
      ></Button>
    </ButtonGroup>
  );
}
