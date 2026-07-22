import { darkModeName, lightModeName, useTheme } from "@/contexts";
import { MoonIcon, SunIcon } from "@/icons";
import { Button, ButtonProps } from "../Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";

/** Toggles between light and dark theme. */
export function DarkModeToggle({
  size = "sm",
  lightModeTooltip = "Light",
  darkModeTooltip = "Dark",
  ...rest
}: {
  lightModeTooltip: string;
  darkModeTooltip: string;
} & ButtonProps<"button">) {
  const theme = useTheme();
  if (!theme) {
    throw new Error("Dark mode toggle requires a ThemeContext.");
  }
  const { isDark, setDarkMode } = theme;
  return (
    <Tooltip isLabel>
      <TooltipTrigger>
        <Button
          aria-label="dark mode toggle"
          onClick={() => setDarkMode(isDark ? lightModeName : darkModeName)}
          startIcon={isDark ? <SunIcon /> : <MoonIcon />}
          size={size}
          {...rest}
        />
      </TooltipTrigger>
      <TooltipContent>
        {isDark ? lightModeTooltip : darkModeTooltip}
      </TooltipContent>
    </Tooltip>
  );
}
