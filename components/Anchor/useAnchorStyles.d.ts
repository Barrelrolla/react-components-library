import { ColorType } from '../../types';
export declare function useAnchorStyles({ underlined, hoverUnderline, hoverUnderlineOffset, color, className, }: {
    underlined: boolean;
    hoverUnderline: boolean;
    hoverUnderlineOffset: boolean;
    color?: ColorType;
    className?: string;
}): {
    styles: string;
    resolvedColor: ColorType;
};
