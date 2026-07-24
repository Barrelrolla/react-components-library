import { ElementType } from '../../../node_modules/react';
import { AnchorProps } from '../Anchor';
declare const defaultType = "a";
export type NavbarLinkProps<E extends ElementType> = {
    /** Is the current menu item selected. */
    selected?: boolean;
} & AnchorProps<E>;
/** Link to be used in the Collapsable list of the Navbar. */
export declare function NavbarLink<E extends ElementType = typeof defaultType>({ as, selected, hoverUnderline, underlined, onClick, onFocus, onBlur, children, className, ...rest }: NavbarLinkProps<E>): import("react").JSX.Element;
export {};
