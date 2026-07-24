import { ComponentProps, CSSProperties } from '../../../node_modules/react';
import { ColorType, ResponsiveSizes } from '../../types';
export type FooterProps = {
    /** Color of the footer. */
    color?: ColorType;
    /** Adds a border and rounding. */
    decorations?: boolean;
    /** Size at which the ordering should switch from col to row. */
    responsiveAt?: ResponsiveSizes;
    /** The footer sits inside a continer. Add classes to it here. */
    containerClasses?: string;
    /**Any styles for the container. */
    containerStyle?: CSSProperties;
    className?: string;
} & ComponentProps<"div">;
export declare function Footer({ color, decorations, responsiveAt, containerStyle, containerClasses, className, children, ...rest }: FooterProps): import("react").JSX.Element;
