import { ResponsiveSizes } from '../../types';
import { HeroAlign } from './HeroTypes';
/** Context holding data for components inside a Hero */
export type HeroContextType = {
    /** Select if text should be left or center aligned. By default it's left aligned on big screens and center on small ones. */
    textAlign: HeroAlign;
    /** Same as `textAlign` but for actions. */
    actionsAlign: HeroAlign;
    /** The size at which the component should change alignment. */
    responsiveAt: ResponsiveSizes;
} | null;
export declare const HeroContextProvider: import('../../../node_modules/react').Provider<HeroContextType>;
export declare function useHeroContext(): HeroContextType;
