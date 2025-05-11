import { createContext, useContext } from "react";
import { ColorType } from "@/types";

export type CardContextProps =
  | {
      color: ColorType;
    }
  | undefined;

const CardContext = createContext<CardContextProps>(undefined);

export const CardContextProvider = CardContext.Provider;

export function useCardContext() {
  return useContext(CardContext);
}
