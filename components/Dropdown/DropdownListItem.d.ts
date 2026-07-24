import { ElementType } from '../../../node_modules/react';
import { AnchorProps } from '../Anchor';
declare const defaultType = "a";
export declare function DropdownListItem<E extends ElementType = typeof defaultType>({ as, ref, color, disabled, children, className, ...rest }: {
    disabled?: boolean;
} & AnchorProps<E>): import("react").JSX.Element;
export {};
