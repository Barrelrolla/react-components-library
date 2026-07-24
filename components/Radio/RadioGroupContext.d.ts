import { ColorType } from '../../types';
export type RadioGroupContextType = {
    name: string;
    color?: ColorType;
    labelColor?: ColorType;
    size?: number;
} | null;
export declare const RadioGroupContextProvider: import('../../../node_modules/react').Provider<RadioGroupContextType>;
export declare function useRadioGroupContext(): RadioGroupContextType;
