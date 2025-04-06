import React from "react";
import { ElementType, ReactNode } from "react";

export type PolymorphicProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode | string;
};

export function PolymorphicElement<T extends ElementType = "div">({
  as,
  children,
  ...rest
}: PolymorphicProps<T>) {
  const Component = as || "div";
  return React.createElement(Component, { children, ...rest });
}

export type ColorType = "white" | "black" | "primary" | "secondary" | "accent";
export type ColorShadesType =
  | "lightShade"
  | "lightHighlightedShade"
  | "lightActiveShade"
  | "darkShade"
  | "darkHighlightedShade"
  | "darkActiveShade";
export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
