import { createContext, useContext } from "react";
import { ColorType, ResponsiveSizes } from "@/types";

export type NavbarContextType =
  | {
      primaryColor: ColorType;
      secondaryColor: ColorType;
      collapseAt: ResponsiveSizes;
      position: "top" | "bottom";
      rounded: boolean;
      isOpen: boolean;
      setIsOpen: (isOpen: boolean) => void;
    }
  | undefined;

const NavbarContext = createContext<NavbarContextType>(undefined);
export const NavbarContextProvider = NavbarContext.Provider;

export function useNavbarContext() {
  return useContext(NavbarContext);
}
