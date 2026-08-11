import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import {
  darkModeName,
  lightModeName,
  systemModeName,
  useTheme,
} from "@/contexts";
import { Button, ButtonGroup, ButtonGroupProps } from "../Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

export type DarkModeSelectorProps = {
  /** Tooltip text displayed for the light theme option. */
  lightModeTooltip?: string;
  /** Tooltip text displayed for the dark theme option. */
  darkModeTooltip?: string;
  /** Tooltip text displayed for the system theme option. */
  systemModeTooltip?: string;
  /** Accessible label for the light theme button. */
  lightModeAriaLabel?: string;
  /** Accessible label for the dark theme button. */
  darkModeAriaLabel?: string;
  /** Accessible label for the system theme button. */
  systemModeAriaLabel?: string;
} & ButtonGroupProps;

/**
 * Theme switcher control for toggling between Light, Dark, and System preference modes.
 *
 * Built on top of `ButtonGroup`, inheriting all styling, sizing, and variant props.
 */
export function DarkModeSelector({
  size = "sm",
  divider = false,
  lightModeTooltip = "Light",
  darkModeTooltip = "Dark",
  systemModeTooltip = "System",
  lightModeAriaLabel,
  darkModeAriaLabel,
  systemModeAriaLabel,
  ...rest
}: DarkModeSelectorProps) {
  const theme = useTheme();
  if (!theme) {
    throw new Error("Dark Mode Selector requires a Theme Provider!");
  }
  const { darkMode, setDarkMode } = theme;

  return (
    <ButtonGroup size={size} divider={divider} {...rest}>
      <Tooltip isLabel>
        <TooltipTrigger>
          <Button
            aria-label={lightModeAriaLabel ?? "light theme mode"}
            selected={darkMode === lightModeName}
            onClick={() => setDarkMode(lightModeName)}
            startIcon={<SunIcon />}
          ></Button>
        </TooltipTrigger>
        <TooltipContent>{lightModeTooltip}</TooltipContent>
      </Tooltip>
      <Tooltip isLabel>
        <TooltipTrigger>
          <Button
            aria-label={darkModeAriaLabel ?? "dark theme mode"}
            selected={darkMode === darkModeName}
            onClick={() => setDarkMode(darkModeName)}
            startIcon={<MoonIcon />}
          ></Button>
        </TooltipTrigger>
        <TooltipContent>{darkModeTooltip}</TooltipContent>
      </Tooltip>
      <Tooltip isLabel>
        <TooltipContent>{systemModeTooltip}</TooltipContent>
        <TooltipTrigger>
          <Button
            aria-label={systemModeAriaLabel ?? "system theme mode"}
            selected={darkMode === systemModeName}
            onClick={() => setDarkMode(systemModeName)}
            startIcon={<ComputerIcon />}
          ></Button>
        </TooltipTrigger>
      </Tooltip>
    </ButtonGroup>
  );
}
