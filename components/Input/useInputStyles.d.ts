export declare function useInputStyles({ bgFill, startIcon, endIcon, validating, className, wrapperClasses, labelClasses, errorClasses, inputContainerClasses, }: {
    bgFill?: boolean;
    startIcon: boolean;
    endIcon: boolean;
    validating: boolean;
    className?: string;
    wrapperClasses?: string;
    labelClasses?: string;
    errorClasses?: string;
    inputContainerClasses?: string;
}): {
    styles: string;
    wrapperStyles: string;
    labelStyles: string;
    errorStyles: string;
    inputContainerStyles: string;
};
