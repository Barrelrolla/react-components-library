interface HamburgerStyles {
    button: string;
    container: string;
    topLine: string;
    midLine: string;
    botLine: string;
}
export declare function useHamburgerStyles({ isOpen, className, }: {
    isOpen: boolean;
    className?: string;
}): HamburgerStyles;
export {};
