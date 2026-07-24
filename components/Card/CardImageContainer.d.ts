import { ComponentProps } from '../../../node_modules/react';
export type CardImageContainerProps = {
    /** Adds padding and border to the image. */
    padded?: boolean;
    className?: string;
};
/** Container for an image inside a card component. */
export declare function CardImageContainer({ padded, className, children, ...rest }: CardImageContainerProps & ComponentProps<"div">): import("react").JSX.Element;
