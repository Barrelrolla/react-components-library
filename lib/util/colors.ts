import { ColorShadesType, ColorType } from "../types";

type ColorMapEntry = {
  [key in ColorType]: {
    [key in ColorShadesType]: string;
  };
};
export const ColorMap: ColorMapEntry = {
  white: {
    lightShade: "stone-50",
    lightHighlightedShade: "stone-200",
    lightActiveShade: "stone-300",
    darkShade: "stone-50",
    darkHighlightedShade: "stone-200",
    darkActiveShade: "stone-300",
  },
  black: {
    lightShade: "stone-950",
    lightHighlightedShade: "stone-900",
    lightActiveShade: "stone-800",
    darkShade: "stone-950",
    darkHighlightedShade: "stone-900",
    darkActiveShade: "stone-800",
  },
  primary: {
    lightShade: "primary-100",
    lightHighlightedShade: "primary-200",
    lightActiveShade: "primary-300",
    darkShade: "primary-800",
    darkHighlightedShade: "primary-700",
    darkActiveShade: "primary-600",
  },
  secondary: {
    lightShade: "secondary-100",
    lightHighlightedShade: "secondary-200",
    lightActiveShade: "secondary-300",
    darkShade: "secondary-800",
    darkHighlightedShade: "secondary-700",
    darkActiveShade: "secondary-600",
  },
  accent: {
    lightShade: "accent-100",
    lightHighlightedShade: "accent-200",
    lightActiveShade: "accent-300",
    darkShade: "accent-800",
    darkHighlightedShade: "accent-700",
    darkActiveShade: "accent-600",
  },
};
