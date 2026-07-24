export declare function useFooterStyles({ decorations, containerClasses, className, }: {
    decorations: boolean;
    containerClasses?: string;
    className?: string;
}): {
    containerStyles: string;
    styles: string;
};
export declare function useFooterBrandStyles({ className }: {
    className?: string;
}): {
    classes: string;
    resolvedColor: import('../..').ColorType;
};
export declare function useFooterDivider(): {
    resolvedColor: import('../..').ColorType;
};
export declare function useFooterLinksSectionStyles({ className, }: {
    className?: string;
}): {
    styles: string;
};
export declare function useFooterLinkGroupStyles({ className, }: {
    className?: string;
}): {
    styles: string;
};
export declare function useFooterLinksTitleStyles({ className, }: {
    className?: string;
}): {
    styles: string;
};
export declare function useFooterLinkStyles({ className }: {
    className?: string;
}): {
    styles: string;
    color: import('../..').ColorType;
};
export declare function useFooterFullSectionStyles({ className, }: {
    className?: string;
}): {
    styles: string;
};
export declare function useFooterIconsContainerStyles({ className, }: {
    className?: string;
}): {
    styles: string;
};
