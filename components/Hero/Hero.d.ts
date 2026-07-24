import { ComponentProps, CSSProperties } from '../../../node_modules/react';
import { ColorType, ResponsiveSizes } from '../../types';
import { HeroAlign } from './HeroTypes';
export type HeroProps = {
    /** Hero color */
    color?: ColorType;
    /** Aligns text to the left or to the center. By default it's `responsive` meaning it's left aligned on big screens and center on small ones. */
    textAlign?: HeroAlign;
    /** Alignment of the actions. By default it's `center` */
    actionsAlign?: HeroAlign;
    /** If the alignment of other components is `responsive`, chooose at which size it changes. */
    responsiveAt?: ResponsiveSizes;
    /** The hero component has a wrapper that has the full page width, use this to apply classes to the wrapper. */
    wrapperClasses?: string;
    /** Stype for the wrapper. */
    wrapperStyle?: CSSProperties;
} & ComponentProps<"div">;
export declare function Hero({ color, textAlign, actionsAlign, responsiveAt, wrapperClasses, wrapperStyle, className, children, ...rest }: HeroProps): import("react").JSX.Element;
