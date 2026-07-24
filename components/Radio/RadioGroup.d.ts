import { ComponentProps } from '../../../node_modules/react';
import { RadioProps } from './Radio';
export type RadioGroupProps = {
    name: string;
    title: string;
} & ComponentProps<"fieldset"> & RadioProps;
export declare function RadioGroup({ title, name, color, labelColor, size, children, ...rest }: RadioGroupProps): import("react").JSX.Element;
