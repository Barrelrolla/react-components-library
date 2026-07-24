import { ResponsiveSizes } from '../../types';
export declare function useNavbarStyles({ fixed, position, glass: isGlass, hasShadow, collapseAt, isOpen, className, backdropClasses, }: {
    fixed: boolean;
    position: "top" | "bottom";
    glass: boolean;
    hasShadow: boolean;
    isOpen: boolean;
    collapseAt: ResponsiveSizes;
    className?: string;
    backdropClasses?: string;
}): {
    styles: string;
    navStyles: string;
    backdropStyles: string;
};
export declare function useNavbarBrandStyles({ className }: {
    className?: string;
}): {
    styles: string;
    resolvedColor: import('../../types').ColorType;
};
export declare function useNavbarCollapseStyles({ wrapperClasses, className, }: {
    wrapperClasses?: string;
    className?: string;
}): {
    wrapperStyles: string;
    styles: string;
};
export declare function useNavbarLinkStyles({ className }: {
    className?: string;
}): {
    styles: string;
    resolvedColor: import('../../types').ColorType;
};
export declare function useNavbarToggleStyles({ wrapperClasses, }: {
    wrapperClasses?: string;
}): {
    styles: string;
    resolvedColor: import('../../types').ColorType;
};
