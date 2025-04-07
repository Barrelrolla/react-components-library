import { createContext } from "react";
import { ColorType, SizeType } from "@/types";

type NavbarContextType =
  | {
      primaryColor?: ColorType;
      secondaryColor?: ColorType;
      expandSize?: SizeType;
      stickToTop?: boolean;
      rounded?: boolean;
      border?: boolean;
      shadow?: boolean;
      open?: boolean;
    }
  | undefined;

export const NavbarContext = createContext<NavbarContextType>(undefined);
