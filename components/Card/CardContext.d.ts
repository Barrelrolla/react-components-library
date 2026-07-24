import { ColorType } from '../../types';
export type CardContextProps = {
    color: ColorType;
} | null;
export declare const CardContextProvider: import('../../../node_modules/react').Provider<CardContextProps>;
export declare function useCardContext(): CardContextProps;
