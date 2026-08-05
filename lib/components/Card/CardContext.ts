import { createContext, useContext } from "react";

export type CardContextType = {
  hasContext: true;
} | null;

const CardContext = createContext<CardContextType>(null);

export const CardContextProvider = CardContext.Provider;

export function useCardContext() {
  return useContext(CardContext);
}
