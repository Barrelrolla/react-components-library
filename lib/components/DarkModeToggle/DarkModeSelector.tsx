import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import {
  darkModeName,
  lightModeName,
  systemModeName,
  useTheme,
} from "@/contexts";
import { Button, ButtonGroup, ButtonGroupProps } from "../Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

/** Provides an option to choose between light, dark and system theme. */
export function DarkModeSelector({
  variant = "outline",
  size = "sm",
  divider = false,
  lightModeTooltip = "Light",
  darkModeTooltip = "Dark",
  systemModeTooltip = "System",
  ...rest
}: ButtonGroupProps & {
  lightModeTooltip: string;
  darkModeTooltip: string;
  systemModeTooltip: string;
}) {
  const theme = useTheme();
  if (!theme) {
    throw new Error("Dark Mode Selector requires a Theme Provider!");
  }
  const { darkMode, setDarkMode } = theme;

  return (
    <ButtonGroup variant={variant} size={size} divider={divider} {...rest}>
      <Tooltip isLabel>
        <TooltipTrigger>
          <Button
            aria-label="ligth theme mode"
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
            aria-label="dark theme mode"
            selected={darkMode === darkModeName}
            onClick={() => setDarkMode(darkModeName)}
            startIcon={<MoonIcon />}
          ></Button>
        </TooltipTrigger>
        <TooltipContent>{darkModeTooltip}</TooltipContent>
      </Tooltip>
      <Tooltip isLabel>
        <TooltipTrigger>
          <Button
            aria-label="system theme mode"
            selected={darkMode === systemModeName}
            onClick={() => setDarkMode(systemModeName)}
            startIcon={<ComputerIcon />}
          ></Button>
        </TooltipTrigger>
        <TooltipContent>{systemModeTooltip}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
