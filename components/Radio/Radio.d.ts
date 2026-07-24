import { ComponentProps, CSSProperties } from '../../../node_modules/react';
import { ColorType } from '../../types';
export type RadioProps = {
    color?: ColorType;
    labelColor?: ColorType;
    labelStyle?: CSSProperties;
    labelClasses?: string;
    defaultChecked?: boolean;
    wrapperClasses?: string;
    size?: number;
} & ComponentProps<"input">;
export declare function Radio({ color, labelColor, size, style, labelStyle, labelClasses, className, name, children, ...rest }: RadioProps): import("react").JSX.Element;
