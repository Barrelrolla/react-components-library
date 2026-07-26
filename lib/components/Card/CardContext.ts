import { createContext, useContext } from "react";
import { ColorType } from "@/types";

export type CardContextType = {
  color: ColorType;
} | null;

const CardContext = createContext<CardContextType>(null);

export const CardContextProvider = CardContext.Provider;

export function useCardContext() {
  return useContext(CardContext);
}
