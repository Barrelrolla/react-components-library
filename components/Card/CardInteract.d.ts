import { ElementType } from '../../../node_modules/react';
import { PolymorphicProps } from '../../types';
declare const defaultType: "a";
/** An anchor element to be used inside a card component. All children will be part of the interactable area. */
export declare function CardInteract<E extends ElementType = typeof defaultType>({ as, tabIndex, style, className, children, ...rest }: PolymorphicProps<E>): import("react").JSX.Element;
export {};
