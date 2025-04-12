import { ColorShadesType, ColorType } from "../types";

type ColorMapEntry = {
  [key in ColorType]: {
    [key in ColorShadesType]: string;
  };
};

export const ColorMap: ColorMapEntry = {
  white: {
    light: "white",
    lightHighlight: "white-highlight",
    lightActive: "white-active",
    dark: "white",
    darkHighlight: "white-highlight",
    darkActive: "white-active",
  },
  black: {
    light: "black",
    lightHighlight: "black-highlight",
    lightActive: "black-active",
    dark: "black",
    darkHighlight: "black-highlight",
    darkActive: "black-active",
  },
  primary: {
    light: "primary-light",
    lightHighlight: "primary-light-highlight",
    lightActive: "primary-light-active",
    dark: "primary-dark",
    darkHighlight: "primary-dark-highlight",
    darkActive: "primary-dark-active",
  },
  secondary: {
    light: "secondary-light",
    lightHighlight: "secondary-light-highlight",
    lightActive: "secondary-light-active",
    dark: "secondary-dark",
    darkHighlight: "secondary-dark-highlight",
    darkActive: "secondary-dark-active",
  },
  accent: {
    light: "accent-light",
    lightHighlight: "accent-light-highlight",
    lightActive: "accent-light-active",
    dark: "accent-dark",
    darkHighlight: "accent-dark-highlight",
    darkActive: "accent-dark-active",
  },
};
