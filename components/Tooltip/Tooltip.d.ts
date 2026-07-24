import { PropsWithChildren } from '../../../node_modules/react';
import { ColorType } from '../../types';
import { Placement } from '@floating-ui/react';
export type TooltipProps = {
    color?: ColorType;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    placement?: Placement;
    delay?: number;
    hasArrow?: boolean;
    isLabel?: boolean;
    disabled?: boolean;
} & PropsWithChildren;
export declare function Tooltip({ color, isOpen, onOpenChange, placement, delay, hasArrow, isLabel, disabled, children, }: TooltipProps): import("react").JSX.Element;
