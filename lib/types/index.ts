import { Placement } from "@floating-ui/react";
import { ComponentPropsWithoutRef, Ref } from "react";
import { ElementType } from "react";

type ElementTypeMap<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;

/** Polymorphic props helper allowing components to be rendered as any HTML element or component. */
export type PolymorphicProps<T extends ElementType> = {
  /** The HTML element or React component the component should be rendered as. */
  as?: T;
  /** Ref forwarded to the underlying element. */
  ref?: Ref<ElementTypeMap<T> | null>;
} & ComponentPropsWithoutRef<T>;

export type ColorType =
  | "main"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export const availableColors: ColorType[] = [
  "main",
  "neutral",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export const availableSizes: SizeType[] = ["xs", "sm", "md", "lg", "xl"];

export type ResponsiveSizes = "sm" | "md" | "lg" | "xl";

export const availableResponsiveSizes: ResponsiveSizes[] = [
  "sm",
  "md",
  "lg",
  "xl",
];

export const availablePlacements: Placement[] = [
  "bottom",
  "bottom-end",
  "bottom-start",
  "left",
  "left-end",
  "left-start",
  "right",
  "right-end",
  "right-start",
  "top",
  "top-end",
  "top-start",
];

export type MobileSheetPlacementType = "top" | "bottom" | "left" | "right";

export const availableMobileSheetPlacements: MobileSheetPlacementType[] = [
  "top",
  "bottom",
  "left",
  "right",
];

export type floatingRoles =
  | "tooltip"
  | "dialog"
  | "alertdialog"
  | "menu"
  | "listbox"
  | "grid"
  | "tree"
  | "label"
  | "select"
  | "combobox";

export type CssInJs = {
  [key: string]: string | string[] | CssInJs | CssInJs[];
};
