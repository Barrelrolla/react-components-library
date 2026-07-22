import { createContext, useContext } from "react";
import { ColorType } from "@/types";

export type CardContextProps = {
  color: ColorType;
} | null;

const CardContext = createContext<CardContextProps>(null);

export const CardContextProvider = CardContext.Provider;

export function useCardContext() {
  return useContext(CardContext);
}
