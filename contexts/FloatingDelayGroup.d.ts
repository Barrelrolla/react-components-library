import { PropsWithChildren } from '../../node_modules/react';
export type FloatingDelayGroupContextProps = {
    delay?: number;
} | null;
export declare function FloatingDelayGroupContextProvider({ delay, children, }: FloatingDelayGroupContextProps & PropsWithChildren): import("react").JSX.Element;
export declare function useFloatingDelayGroupContext(): FloatingDelayGroupContextProps;
