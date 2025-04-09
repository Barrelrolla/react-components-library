import { createContext } from "react";
import { ColorType, SizeType } from "@/types";

type NavbarContextType =
  | {
      primaryColor: ColorType;
      secondaryColor: ColorType;
      expandSize: SizeType;
      fixed: boolean;
      rounded: boolean;
      border: boolean;
      shadow: boolean;
      isOpen: boolean;
      setIsOpen: (isOpen: boolean) => void;
    }
  | undefined;

export const NavbarContext = createContext<NavbarContextType>(undefined);
