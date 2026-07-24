import { Placement } from '@floating-ui/react';
import { ComponentPropsWithoutRef, Ref, ElementType } from '../../node_modules/react';
type ElementTypeMap<T extends ElementType> = T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : HTMLElement;
export type PolymorphicProps<T extends ElementType> = {
    /** The html element (or other component) the component should be rendered as */
    as?: T;
    ref?: Ref<ElementTypeMap<T> | null>;
} & ComponentPropsWithoutRef<T>;
export type ColorType = "main" | "light" | "dark" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
export declare const availableColors: ColorType[];
export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
export declare const availableSizes: SizeType[];
export type ResponsiveSizes = "sm" | "md" | "lg" | "xl";
export declare const availableResponsiveSizes: ResponsiveSizes[];
export declare const availablePlacements: Placement[];
export type floatingRoles = "tooltip" | "dialog" | "alertdialog" | "menu" | "listbox" | "grid" | "tree" | "label" | "select" | "combobox";
export type CssInJs = {
    [key: string]: string | string[] | CssInJs | CssInJs[];
};
export {};
