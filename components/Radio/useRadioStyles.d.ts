import { ColorType } from '../../types';
export declare function useRadioStyles({ color, labelColor, className, labelClasses, wrapperClasses, }: {
    color?: ColorType;
    labelColor?: ColorType;
    className?: string;
    labelClasses?: string;
    wrapperClasses?: string;
}): {
    resolvedColor: ColorType;
    resolvedLabelColor: ColorType;
    checkedClasses: string;
    unCheckedClasses: string;
    labelClass: string;
    wrapperClass: string;
};
