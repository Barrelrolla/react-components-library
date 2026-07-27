import { createContext, PropsWithChildren, useContext } from "react";

export type FloatingContextType = {
  duration: number,
  arrowSize: number,
} | null;
const FloatingContext = createContext<FloatingContextType>(null);

export function FloatingTransitionsContextProvider({
  children,
}: PropsWithChildren) {

  return <FloatingContext.Provider value={{ duration: 150, arrowSize: 14 }}>{children}</FloatingContext.Provider>;
}

export function useFloatingContext() {
  return useContext(FloatingContext);
}