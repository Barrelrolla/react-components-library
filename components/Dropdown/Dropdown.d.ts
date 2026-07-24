import { PropsWithChildren } from '../../../node_modules/react';
import { ColorType } from '../../types';
import { Placement } from '@floating-ui/react';
export type DropdownProps = {
    color?: ColorType;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    placement?: Placement;
    hasArrow?: boolean;
    requireClick?: boolean;
    disabled?: boolean;
} & PropsWithChildren;
export declare function DropdownComponent({ color, isOpen, onOpenChange, placement, hasArrow, requireClick, disabled, children, }: DropdownProps): import("react").JSX.Element;
export declare function Dropdown(props: DropdownProps): import("react").JSX.Element;
