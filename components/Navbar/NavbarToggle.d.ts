import { HamburgerButtonProps } from '../HamburgerButton';
export type NavbarToggleProps = Omit<HamburgerButtonProps, "isOpen">;
/** Hamburger toggle button for the Navbar. */
export declare function NavbarToggle({ size, wrapperClasses, ...rest }: NavbarToggleProps): import("react").JSX.Element;
