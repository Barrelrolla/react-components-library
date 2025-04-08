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
    lightShade: "primary-300",
    lightHighlightedShade: "primary-200",
    lightActiveShade: "primary-100",
    darkShade: "primary-600",
    darkHighlightedShade: "primary-700",
    darkActiveShade: "primary-800",
  },
  secondary: {
    lightShade: "secondary-300",
    lightHighlightedShade: "secondary-200",
    lightActiveShade: "secondary-100",
    darkShade: "secondary-600",
    darkHighlightedShade: "secondary-700",
    darkActiveShade: "secondary-800",
  },
  accent: {
    lightShade: "accent-300",
    lightHighlightedShade: "accent-200",
    lightActiveShade: "accent-100",
    darkShade: "accent-600",
    darkHighlightedShade: "accent-700",
    darkActiveShade: "accent-800",
  },
};
