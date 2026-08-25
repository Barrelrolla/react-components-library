import { darkModeName, lightModeName, useTheme } from "@/contexts";
import { MoonIcon, SunIcon } from "@/icons";
import { Button, ButtonProps } from "../Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";

export type DarkModeToggleProps = {
  /** Tooltip text displayed when switching to or hovering over the light theme option. */
  lightModeTooltip?: string;
  /** Tooltip text displayed when switching to or hovering over the dark theme option. */
  darkModeTooltip?: string;
} & ButtonProps<"button">;

/**
 * Compact theme toggle button for switching between Light and Dark modes.
 *
 * Built on top of `Button`, inheriting all visual variant, size, and styling props.
 */
export function DarkModeToggle({
  variant = "ghost",
  size = "sm",
  lightModeTooltip,
  darkModeTooltip,
  ...rest
}: DarkModeToggleProps) {
  const theme = useTheme();
  if (!theme) {
    throw new Error("Dark mode toggle requires a ThemeContext.");
  }
  const { isDark, setDarkMode } = theme;
  return (
    <Tooltip
      isLabel
      disabled={lightModeTooltip === undefined || darkModeTooltip === undefined}
    >
      <TooltipTrigger>
        <Button
          variant={variant}
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
