import { createContext, RefObject } from "react";
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
      navbarRef: RefObject<HTMLElement | null>;
    }
  | undefined;

export const NavbarContext = createContext<NavbarContextType>(undefined);
