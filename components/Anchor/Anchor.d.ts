import { ElementType } from '../../../node_modules/react';
import { ColorType, PolymorphicProps } from '../../types';
declare const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
    /** Color of the anchor element. */
    color?: ColorType;
    /** Adds underline. */
    underlined?: boolean;
    /** Adds underline on hover. */
    hoverUnderline?: boolean;
    /** Adds an offset to the underline on hover. */
    hoverUnderlineOffset?: boolean;
} & PolymorphicProps<E>;
export declare function Anchor<E extends ElementType = typeof defaultType>({ as, color, underlined, hoverUnderline, hoverUnderlineOffset, className, style, children, ...rest }: AnchorProps<E>): import("react").JSX.Element;
export {};
