import { ColorType } from '../../types';
import { UseFloatingReturn, UseInteractionsReturn } from '@floating-ui/react';
import { Ref } from '../../../node_modules/react';
export type PopoverContextType = {
    color: ColorType;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    data: UseFloatingReturn;
    interactions: UseInteractionsReturn;
    disabled?: boolean;
    hasArrow?: boolean;
    arrowRef?: Ref<SVGSVGElement> | undefined;
} | undefined;
export declare const PopoverContextProvider: import('../../../node_modules/react').Provider<PopoverContextType>;
export declare function usePopoverContext(): PopoverContextType;
