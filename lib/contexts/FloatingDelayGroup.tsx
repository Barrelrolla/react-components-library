import { FloatingDelayGroup } from "@floating-ui/react";
import { createContext, PropsWithChildren, useContext } from "react";

export type FloatingDelayGroupContextProps = {
  delay?: number;
} | null;
const FloatingDelayGroupContext =
  createContext<FloatingDelayGroupContextProps>(null);

export function FloatingDelayGroupContextProvider({
  delay = 300,
  children,
}: FloatingDelayGroupContextProps & PropsWithChildren) {
  return (
    <FloatingDelayGroupContext.Provider value={{ delay: delay }}>
      <FloatingDelayGroup delay={{ open: delay, close: 50 }}>
        {children}
      </FloatingDelayGroup>
    </FloatingDelayGroupContext.Provider>
  );
}

export function useFloatingDelayGroupContext() {
  return useContext(FloatingDelayGroupContext);
}
