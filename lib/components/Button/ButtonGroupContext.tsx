import { createContext } from "react";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { ColorType } from "@/types";

type ButtonGroupContextType =
  | {
      variant: ButtonVariant;
      radius: ButtonRadius;
      clearButtonHover: ClearButtonHover;
      primaryColor: ColorType;
      secondaryColor: ColorType;
      contrasting: boolean;
      vertical: boolean;
    }
  | undefined;

export const ButtonGroupContext =
  createContext<ButtonGroupContextType>(undefined);
