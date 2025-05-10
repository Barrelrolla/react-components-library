import { ColorType } from "@/types";
import { createContext, useContext } from "react";

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
