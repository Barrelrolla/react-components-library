import { ButtonProps } from '../Button';
/** Toggles between light and dark theme. */
export declare function DarkModeToggle({ size, lightModeTooltip, darkModeTooltip, ...rest }: {
    lightModeTooltip?: string;
    darkModeTooltip?: string;
} & ButtonProps<"button">): import("react").JSX.Element;
