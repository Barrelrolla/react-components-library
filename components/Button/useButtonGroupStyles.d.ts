import { ButtonRadius, ButtonVariant } from './buttonTypes';
export declare function useButtonGroupStyles({ variant, radius, vertical, className, wrapperClasses, }: {
    variant?: ButtonVariant;
    radius?: ButtonRadius;
    vertical: boolean;
    className?: string;
    wrapperClasses?: string;
}): {
    groupStyles: string;
    wrapperStyles: string;
};
