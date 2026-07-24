import { ComponentProps } from '../../../node_modules/react';
import { ColorType, SizeType } from '../../types';
import { ButtonRadius, ButtonVariant, GhostHover } from './buttonTypes';
export type ButtonGroupProps = {
    /** Color of the buttons in the group. */
    color?: ColorType;
    /** Variant of the buttons. */
    variant?: ButtonVariant;
    /** Hover variant of the ghost buttons. */
    ghostHover?: GhostHover;
    /** If the buttons should retain focus state after being pressed. */
    retainFocusState?: boolean;
    /** Size of the buttons. */
    size?: SizeType;
    /** Radius of the buttons. */
    radius?: ButtonRadius;
    /** Adds a divider between the buttons. */
    divider?: boolean;
    /** Set to `true` for a vertical group. */
    vertical?: boolean;
    /** Disables scaling of the buttons on press. */
    scaling?: boolean;
    /** You can add any styles to the divider here. */
    dividerClasses?: string;
    /** The button group wraps all buttons in a wrapper. You can add css classes to it here. */
    wrapperClasses?: string;
    tooltipDelay?: number;
} & ComponentProps<"div">;
export declare function ButtonGroup({ color, variant, radius, ghostHover, retainFocusState, size, divider, vertical, scaling, tooltipDelay, className, dividerClasses, children, ...rest }: ButtonGroupProps): import("react").JSX.Element;
