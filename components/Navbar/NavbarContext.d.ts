import { ColorType, ResponsiveSizes } from '../../types';
export type NavbarContextType = {
    /** Color of the Navbar. */
    color: ColorType;
    /** Size at which the Navbar should switch collapsed state. */
    collapseAt: ResponsiveSizes;
    /** Fixed position. */
    position: "top" | "bottom";
    /** If the dropdown menu is open. */
    isOpen: boolean;
    /** Function to set the open state. */
    setIsOpen: (isOpen: boolean) => void;
} | null;
export declare const NavbarContextProvider: import('../../../node_modules/react').Provider<NavbarContextType>;
export declare function useNavbarContext(): NavbarContextType;
