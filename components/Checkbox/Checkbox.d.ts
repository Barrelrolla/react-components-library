import { ComponentProps, CSSProperties } from '../../../node_modules/react';
import { ColorType } from '../../types';
export type CheckboxProps = {
    color?: ColorType;
    labelColor?: ColorType;
    labelStyle?: CSSProperties;
    labelClasses?: string;
    defaultChecked?: boolean;
    wrapperClasses?: string;
    size?: number;
} & ComponentProps<"input">;
export declare function Checkbox({ color, labelColor, size, style, labelStyle, labelClasses, wrapperClasses, className, children, ...rest }: CheckboxProps): import("react").JSX.Element;
