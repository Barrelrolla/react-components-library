import { ButtonGroupProps } from '../Button';
/** Provides an option to choose between light, dark and system theme. */
export declare function DarkModeSelector({ variant, size, divider, lightModeTooltip, darkModeTooltip, systemModeTooltip, ...rest }: ButtonGroupProps & {
    lightModeTooltip?: string;
    darkModeTooltip?: string;
    systemModeTooltip?: string;
}): import("react").JSX.Element;
