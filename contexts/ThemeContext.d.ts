import { PropsWithChildren } from '../../node_modules/react';
export declare const darkModeName = "dark";
export declare const lightModeName = "light";
export declare const systemModeName = "system";
export type DarkModeType = typeof lightModeName | typeof darkModeName | typeof systemModeName;
export type ThemeContextProps = {
    scalingButtons?: boolean;
    buttonsRetainFocus?: boolean;
};
export type ThemeContextType = ({
    theme: string | undefined;
    setTheme: (theme: string) => void;
    darkMode: DarkModeType | undefined;
    isDark: boolean | undefined;
    setDarkMode: (themeMode: DarkModeType) => void;
} & ThemeContextProps) | null;
export declare function ThemeContextProvider({ value, children, }: {
    value?: ThemeContextProps;
} & PropsWithChildren): import("react").JSX.Element;
export declare function useTheme(): ThemeContextType;
