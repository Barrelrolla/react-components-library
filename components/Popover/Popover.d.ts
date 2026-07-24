import { PropsWithChildren } from '../../../node_modules/react';
import { ColorType, floatingRoles } from '../../types';
import { Placement } from '@floating-ui/react';
export type PopoverProps = {
    color?: ColorType;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    placement?: Placement;
    delay?: number;
    requireClick?: boolean;
    hasArrow?: boolean;
    role?: floatingRoles;
    disabled?: boolean;
} & PropsWithChildren;
export declare function PopoverComponent({ color, isOpen, onOpenChange, placement, delay, hasArrow, requireClick, role, disabled, children, }: PopoverProps): import("react").JSX.Element;
export declare function Popover(props: PopoverProps): import("react").JSX.Element;
