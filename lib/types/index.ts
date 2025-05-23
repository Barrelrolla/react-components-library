import { ComponentPropsWithoutRef, RefObject } from "react";
import { ElementType } from "react";

type ElementTypeMap<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;

export type PolymorphicProps<T extends ElementType> = {
  /** The html element (or other component) the component should be rendered as */
  as?: T;
  ref?: RefObject<ElementTypeMap<T> | null>;
} & ComponentPropsWithoutRef<T>;

export type ColorType =
  | "main"
  | "light"
  | "dark"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export type ResponsiveSizes = "sm" | "md" | "lg" | "xl";

export type CssInJs = {
  [key: string]: string | string[] | CssInJs | CssInJs[];
};
