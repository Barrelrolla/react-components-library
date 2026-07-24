import { ColorType, SizeType } from '../../types';
import { ButtonRadius, ButtonVariant, GhostHover } from './buttonTypes';
export declare function useButtonStyles({ variant, ghostHover, retainFocusState, size, isIcon, scaling, disabled, radius, color, className, wrapperClasses, }: {
    variant?: ButtonVariant;
    ghostHover?: GhostHover;
    retainFocusState: boolean;
    size?: SizeType;
    isIcon: boolean;
    scaling: boolean;
    disabled: boolean;
    radius?: ButtonRadius;
    color?: ColorType;
    className?: string;
    wrapperClasses?: string;
}): {
    styles: string;
    wrapperStyles: string;
    resolvedColor: ColorType;
};
