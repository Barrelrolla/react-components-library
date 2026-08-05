import { createContext, PropsWithChildren, useContext } from "react";

export type FloatingContextType = {
  duration: number;
  hasArrow: boolean;
  arrowSize: number;
} | null;
const FloatingContext = createContext<FloatingContextType>(null);

export function FloatingTransitionsContextProvider({
  children,
}: PropsWithChildren) {
  return (
    <FloatingContext.Provider
      value={{ duration: 150, hasArrow: true, arrowSize: 14 }}
    >
      {children}
    </FloatingContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFloatingContext() {
  return useContext(FloatingContext);
}
