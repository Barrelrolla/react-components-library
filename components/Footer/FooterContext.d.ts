import { ColorType, ResponsiveSizes } from '../../types';
export type FooterContextProps = {
    color: ColorType;
    responsiveAt: ResponsiveSizes;
} | null;
export declare const FooterContextProvider: import('../../../node_modules/react').Provider<FooterContextProps>;
export declare function useFooterContext(): FooterContextProps;
