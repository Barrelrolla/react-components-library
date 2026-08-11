import { createContext, useContext } from "react";
import { ColorType, ResponsiveSizes } from "@/types";

export type NavbarContextType = {
  /** Color variant applied across the navigation bar and its nested elements. */
  color: ColorType;
  /** Breakpoint size at which the navigation bar toggles between expanded and collapsed states. */
  collapseAt: ResponsiveSizes;
  /** Screen edge alignment when fixed positioning is enabled. */
  position: "top" | "bottom";
  /** Indicates whether the collapsed mobile menu or dropdown overlay is currently open. */
  isOpen: boolean;
  /** State updater callback to toggle or explicitly set the mobile menu open state. */
  setIsOpen: (isOpen: boolean) => void;
} | null;

const NavbarContext = createContext<NavbarContextType>(null);
/**
 * Context provider that distributes navigation bar state, responsive breakpoint settings,
 * positioning parameters, and menu toggle controls to nested `Navbar` subcomponents.
 */
export const NavbarContextProvider = NavbarContext.Provider;

export function useNavbarContext() {
  return useContext(NavbarContext);
}
