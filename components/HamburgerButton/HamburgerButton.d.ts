import { ButtonProps } from '../Button';
export type HamburgerButtonProps = {
    /** The component that uses it, should provide its isOpen state here. */
    isOpen: boolean;
} & ButtonProps<"button">;
/** A hamburger button that becomes an X on open */
export declare function HamburgerButton({ color, isOpen, className, ...rest }: HamburgerButtonProps): import("react").JSX.Element;
