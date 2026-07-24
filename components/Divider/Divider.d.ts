import { ComponentProps } from '../../../node_modules/react';
import { ColorType, ResponsiveSizes } from '../../types';
export type DividerProps = {
    /** Color of the divider. */
    color?: ColorType;
    /** If the divider should use the bg color instead of the fg color. Default is `false`. */
    useBgColor?: boolean;
    /** Width of the divider in pixels. */
    width?: number;
    /** If you want the divider to change from vertical to horizontal at some display size. */
    responsiveAt?: ResponsiveSizes;
    /** Set to `true` if you want it vertical. Default is `false`. */
    vertical?: boolean;
} & ComponentProps<"div">;
export declare function Divider({ color, useBgColor, width, responsiveAt, vertical, style, className, ...rest }: DividerProps): import("react").JSX.Element;
