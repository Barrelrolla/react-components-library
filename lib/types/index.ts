import { ComponentPropsWithoutRef, RefObject } from "react";
import { ElementType } from "react";

type ElementTypeMap<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;

export type PolymorphicProps<T extends ElementType> = {
  as?: T;
  ref?: RefObject<ElementTypeMap<T> | null>;
} & ComponentPropsWithoutRef<T>;

export type ColorType = "white" | "black" | "primary" | "secondary" | "accent";
export type ColorShadesType =
  | "light"
  | "lightHighlight"
  | "lightActive"
  | "dark"
  | "darkHighlight"
  | "darkActive";
export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
