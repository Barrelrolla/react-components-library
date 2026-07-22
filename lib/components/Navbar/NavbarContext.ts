import { createContext, useContext } from "react";
import { ColorType, ResponsiveSizes } from "@/types";

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

const NavbarContext = createContext<NavbarContextType>(null);
export const NavbarContextProvider = NavbarContext.Provider;

export function useNavbarContext() {
  return useContext(NavbarContext);
}
