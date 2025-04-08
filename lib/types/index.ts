import { RefObject } from "react";
import { ElementType } from "react";

type ElementTypeMap<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;

export type PolymorphicProps<T extends ElementType> = {
  as?: T;
  ref?: RefObject<ElementTypeMap<T> | null>;
};

export type ColorType = "white" | "black" | "primary" | "secondary" | "accent";
export type ColorShadesType =
  | "lightShade"
  | "lightHighlightedShade"
  | "lightActiveShade"
  | "darkShade"
  | "darkHighlightedShade"
  | "darkActiveShade";
export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
