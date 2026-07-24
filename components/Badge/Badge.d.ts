import { ComponentProps } from '../../../node_modules/react';
import { ColorType } from '../../types';
export type BadgeProps = {
    /** Badge text color. */
    color?: ColorType;
} & ComponentProps<"div">;
export declare function Badge({ color, style, className, ...rest }: BadgeProps): import("react").JSX.Element;
