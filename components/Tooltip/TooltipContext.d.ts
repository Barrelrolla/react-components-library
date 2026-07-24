import { ColorType } from '../../types';
import { UseFloatingReturn, UseInteractionsReturn } from '@floating-ui/react';
import { Ref } from '../../../node_modules/react';
export type TooltipContextType = {
    color: ColorType;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    data: UseFloatingReturn;
    interactions: UseInteractionsReturn;
    disabled?: boolean;
    hasArrow?: boolean;
    arrowRef?: Ref<SVGSVGElement> | undefined;
} | undefined;
export declare const TooltipContextProvider: import('../../../node_modules/react').Provider<TooltipContextType>;
export declare function useTooltipContext(): TooltipContextType;
