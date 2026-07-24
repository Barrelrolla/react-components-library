import { CardSizes } from './CardTypes';
export declare function useCardStyles({ horizontal, size, containerClasses, className, }: {
    horizontal: boolean;
    size: CardSizes;
    containerClasses?: string;
    className?: string;
}): {
    containerStyles: string;
    styles: string;
};
export declare function useCardInteractStyles({ className }: {
    className?: string;
}): {
    styles: string;
    color: import('../..').ColorType;
};
export declare function useCardSectionStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useCardTitleStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useCardTextStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useCardActionsStyles({ className }: {
    className?: string;
}): {
    styles: string;
};
export declare function useCardImageContainerStyles({ padded, className, }: {
    padded: boolean;
    className?: string;
}): {
    styles: string;
};
