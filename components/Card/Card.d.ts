import { ComponentProps, CSSProperties } from '../../../node_modules/react';
import { ColorType } from '../../types';
import { CardSizes } from './CardTypes';
export type CardProps = {
    /** Color of the card. */
    color?: ColorType;
    /** If the card sections should be horizontal or vertical Default is `false`. */
    horizontal?: boolean;
    /** Size of the card. */
    size?: CardSizes;
    /** The card is inside a `@container`. Add any classes to it here. */
    containerClasses?: string;
    /** Add any styles for the container here. */
    containerStyle?: CSSProperties;
    /** Classes for the card itself. */
    className?: string;
};
export declare function Card({ color, horizontal, size, containerClasses, containerStyle, style, className, children, ...rest }: CardProps & ComponentProps<"div">): import("react").JSX.Element;
