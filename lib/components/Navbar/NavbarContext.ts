import { createContext } from "react";
import { ColorType } from "@/types";
import { ResponsiveSizes } from "@/util/sizes";

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

export const NavbarContext = createContext<NavbarContextType>(undefined);
