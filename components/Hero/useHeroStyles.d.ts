import { ResponsiveSizes } from '../../types';
export declare function useHeroStyles({ responsiveAt, wrapperClasses, className, }: {
    responsiveAt?: ResponsiveSizes;
    wrapperClasses?: string;
    className?: string;
}): {
    styles: string;
    wrapperStyles: string;
};
export declare function useHeroSectionStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useHeroImageSectionStyles({ className, }: {
    className?: string;
}): {
    styles: string;
};
export declare function useHeroTitleStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useHeroTextStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useHeroActionsStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
