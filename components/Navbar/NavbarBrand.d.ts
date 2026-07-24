import { ElementType } from '../../../node_modules/react';
import { AnchorProps } from '../Anchor';
declare const defaultType = "a";
export type NavbarBrandProps<E extends ElementType> = {} & AnchorProps<E>;
/** Use inside a Navbar component to add a Brand name and logo. */
export declare function NavbarBrand<E extends ElementType = typeof defaultType>({ as, underlined, hoverUnderline, children, className, onClick, ...rest }: NavbarBrandProps<E>): import("react").JSX.Element;
export {};
