import { ComponentProps, CSSProperties, SVGProps } from '../../../node_modules/react';
import { ColorType } from '../../types';
export type InputProps = {
    /** Color of the texts and outlines. */
    color?: ColorType;
    /** If `true` will apply a bg fill on the input in the same color */
    bgFill?: boolean;
    /** Will apply bg fill on error if it is validating. */
    bgFillOnError?: boolean;
    /** Type of the input. Only text based types are accepted. */
    type?: "text" | "email" | "password" | "tel" | "url";
    /** Label of the input. */
    label?: string;
    /** Icon that will be placed inside the input field before the input text. */
    startIcon?: SVGProps<SVGSVGElement>;
    /** Icon that will be placed inside the input field after the input text. */
    endIcon?: SVGProps<SVGSVGElement>;
    /** Disabled the input field. */
    disabled?: boolean;
    /** Error message that will appear under the input. */
    error?: string;
    /** If `true` will apply appropriate colors on error. */
    validating?: boolean;
    /** Used to apply classes to the label. */
    labelClasses?: string;
    /** Used to apply classes to the error message. */
    errorClasses?: string;
    /** Used to apply classes to the whole wrapper. */
    wrapperClasses?: string;
    /** Style for the wrapper. */
    wrapperStyle?: CSSProperties;
    /** Used to apply classes to the input and icons container. */
    inputContainerClasses?: string;
    /** Input conainer style. */
    inputContainerStyle?: CSSProperties;
} & ComponentProps<"input">;
/** The input has a wrapper, which holds the label and the error message. Also a container, which holds the input itself, and any icons that should appear inside the input field. */
export declare function Input({ type, color, validating, bgFill, bgFillOnError, disabled, label, startIcon, endIcon, error, labelClasses, errorClasses, wrapperClasses, wrapperStyle, inputContainerClasses, inputContainerStyle, id, className, ...rest }: InputProps): import("react").JSX.Element;
