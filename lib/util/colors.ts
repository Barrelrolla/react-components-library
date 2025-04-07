import { ColorShadesType, ColorType } from "../types";

// no safelist in tailwind v4...
// style={{ backgroundColor: `var(--color-${color}-${shade})` }}
// this doesn't seem to work

interface Variant {
  bgColor: string;
  textColor: string;
  borderColor: string;
  outlineColor: string;
}

type Color = {
  [key in ColorType]: {
    [key in ColorShadesType]: {
      regular: Variant;
      active: Variant;
      hover: Variant;
      groupHover: Variant;
      groupActive: Variant;
      dark: Variant;
      darkHover: Variant;
      darkGroupHover: Variant;
      darkActive: Variant;
      darkGroupActive: Variant;
    };
  };
};

export const colors: Color = {
  white: {
    lightShade: {
      regular: {
        bgColor: "bg-stone-50",
        textColor: "text-stone-50",
        borderColor: "border-stone-50",
        outlineColor: "outline-stone-50",
      },
      hover: {
        bgColor: "hover:bg-stone-50 focus-visible:bg-stone-50",
        textColor: "hover:text-stone-50 focus-visible:text-stone-50",
        borderColor: "hover:border-stone-50 focus-visible:border-stone-50",
        outlineColor: "hover:outline-stone-50 focus-visible:outline-stone-50",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-50 group-focus-visible:bg-stone-50",
        textColor:
          "group-hover:text-stone-50 group-focus-visible:text-stone-50",
        borderColor:
          "group-hover:border-stone-50 group-focus-visible:border-stone-50",
        outlineColor:
          "group-hover:outline-stone-50 group-focus-visible:outline-stone-50",
      },
      active: {
        bgColor: "active:bg-stone-50",
        textColor: "active:text-stone-50",
        borderColor: "active:border-stone-50",
        outlineColor: "active:outline-stone-50",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-50",
        textColor: "group-active:text-stone-50",
        borderColor: "group-active:border-stone-50",
        outlineColor: "group-active:outline-stone-50",
      },
      dark: {
        bgColor: "dark:bg-stone-50",
        textColor: "dark:text-stone-50",
        borderColor: "dark:border-stone-50",
        outlineColor: "dark:outline-stone-50",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-50 dark:focus-visible:bg-stone-50",
        textColor: "dark:hover:text-stone-50 dark:focus-visible:text-stone-50",
        borderColor:
          "dark:hover:border-stone-50 dark:focus-visible:border-stone-50",
        outlineColor:
          "dark:hover:outline-stone-50 dark:focus-visible:outline-stone-50",
      },
      darkGroupHover: {
        bgColor: "dark:group-hover:bg-stone-50 dark:group-visible:bg-stone-50",
        textColor:
          "dark:group-hover:text-stone-50 dark:group-visible:text-stone-50",
        borderColor:
          "dark:group-hover:border-stone-50 dark:group-visible:border-stone-50",
        outlineColor:
          "dark:group-hover:outline-stone-50 dark:group-visible:outline-stone-50",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-50",
        textColor: "dark:active:text-stone-50",
        borderColor: "dark:active:border-stone-50",
        outlineColor: "dark:active:outline-stone-50",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-50",
        textColor: "dark:group-active:text-stone-50",
        borderColor: "dark:group-active:border-stone-50",
        outlineColor: "dark:group-active:outline-stone-50",
      },
    },
    lightHighlightedShade: {
      regular: {
        bgColor: "bg-stone-200",
        textColor: "text-stone-200",
        borderColor: "border-stone-200",
        outlineColor: "outline-stone-200",
      },
      hover: {
        bgColor: "hover:bg-stone-200 focus-visible:bg-stone-200",
        textColor: "hover:text-stone-200 focus-visible:text-stone-200",
        borderColor: "hover:border-stone-200 focus-visible:border-stone-200",
        outlineColor: "hover:outline-stone-200 focus-visible:outline-stone-200",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-200 group-focus-visible:bg-stone-200",
        textColor:
          "group-hover:text-stone-200 group-focus-visible:text-stone-200",
        borderColor:
          "group-hover:border-stone-200 group-focus-visible:border-stone-200",
        outlineColor:
          "group-hover:outline-stone-200 group-focus-visible:outline-stone-200",
      },
      active: {
        bgColor: "active:bg-stone-200",
        textColor: "active:text-stone-200",
        borderColor: "active:border-stone-200",
        outlineColor: "active:outline-stone-200",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-200",
        textColor: "group-active:text-stone-200",
        borderColor: "group-active:border-stone-200",
        outlineColor: "group-active:outline-stone-200",
      },
      dark: {
        bgColor: "dark:bg-stone-200",
        textColor: "dark:text-stone-200",
        borderColor: "dark:border-stone-200",
        outlineColor: "dark:outline-stone-200",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-200 dark:focus-visible:bg-stone-200",
        textColor:
          "dark:hover:text-stone-200 dark:focus-visible:text-stone-200",
        borderColor:
          "dark:hover:border-stone-200 dark:focus-visible:border-stone-200",
        outlineColor:
          "dark:hover:outline-stone-200 dark:focus-visible:outline-stone-200",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-200 dark:group-focus-visible:bg-stone-200",
        textColor:
          "dark:group-hover:text-stone-200 dark:group-focus-visible:text-stone-200",
        borderColor:
          "dark:group-hover:border-stone-200 dark:group-focus-visible:border-stone-200",
        outlineColor:
          "dark:group-hover:outline-stone-200 dark:group-focus-visible:outline-stone-200",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-200",
        textColor: "dark:active:text-stone-200",
        borderColor: "dark:active:border-stone-200",
        outlineColor: "dark:active:outline-stone-200",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-200",
        textColor: "dark:group-active:text-stone-200",
        borderColor: "dark:group-active:border-stone-200",
        outlineColor: "dark:group-active:outline-stone-200",
      },
    },
    lightActiveShade: {
      regular: {
        bgColor: "bg-stone-300",
        textColor: "text-stone-300",
        borderColor: "border-stone-300",
        outlineColor: "outline-stone-300",
      },
      hover: {
        bgColor: "hover:bg-stone-300 focus-visible:bg-stone-300",
        textColor: "hover:text-stone-300 focus-visible:text-stone-300",
        borderColor: "hover:border-stone-300 focus-visible:border-stone-300",
        outlineColor: "hover:outline-stone-300 focus-visible:outline-stone-300",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-300 group-focus-visible:bg-stone-300",
        textColor:
          "group-hover:text-stone-300 group-focus-visible:text-stone-300",
        borderColor:
          "group-hover:border-stone-300 group-focus-visible:border-stone-300",
        outlineColor:
          "group-hover:outline-stone-300 group-focus-visible:outline-stone-300",
      },
      active: {
        bgColor: "active:bg-stone-300",
        textColor: "active:text-stone-300",
        borderColor: "active:border-stone-300",
        outlineColor: "active:outline-stone-300",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-300",
        textColor: "group-active:text-stone-300",
        borderColor: "group-active:border-stone-300",
        outlineColor: "group-active:outline-stone-300",
      },
      dark: {
        bgColor: "dark:bg-stone-300",
        textColor: "dark:text-stone-300",
        borderColor: "dark:border-stone-300",
        outlineColor: "dark:outline-stone-300",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-300 dark:focus-visible:bg-stone-300",
        textColor:
          "dark:hover:text-stone-300 dark:focus-visible:text-stone-300",
        borderColor:
          "dark:hover:border-stone-300 dark:focus-visible:border-stone-300",
        outlineColor:
          "dark:hover:outline-stone-300 dark:focus-visible:outline-stone-300",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-300 dark:group-focus-visible:bg-stone-300",
        textColor:
          "dark:group-hover:text-stone-300 dark:group-focus-visible:text-stone-300",
        borderColor:
          "dark:group-hover:border-stone-300 dark:group-focus-visible:border-stone-300",
        outlineColor:
          "dark:group-hover:outline-stone-300 dark:group-focus-visible:outline-stone-300",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-300",
        textColor: "dark:active:text-stone-300",
        borderColor: "dark:active:border-stone-300",
        outlineColor: "dark:active:outline-stone-300",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-300",
        textColor: "dark:group-active:text-stone-300",
        borderColor: "dark:group-active:border-stone-300",
        outlineColor: "dark:group-active:outline-stone-300",
      },
    },
    darkShade: {
      regular: {
        bgColor: "bg-stone-50",
        textColor: "text-stone-50",
        borderColor: "border-stone-50",
        outlineColor: "outline-stone-50",
      },
      hover: {
        bgColor: "hover:bg-stone-50 focus-visible:bg-stone-50",
        textColor: "hover:text-stone-50 focus-visible:text-stone-50",
        borderColor: "hover:border-stone-50 focus-visible:border-stone-50",
        outlineColor: "hover:outline-stone-50 focus-visible:outline-stone-50",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-50 group-focus-visible:bg-stone-50",
        textColor:
          "group-hover:text-stone-50 group-focus-visible:text-stone-50",
        borderColor:
          "group-hover:border-stone-50 group-focus-visible:border-stone-50",
        outlineColor:
          "group-hover:outline-stone-50 group-focus-visible:outline-stone-50",
      },
      active: {
        bgColor: "active:bg-stone-50",
        textColor: "active:text-stone-50",
        borderColor: "active:border-stone-50",
        outlineColor: "active:outline-stone-50",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-50",
        textColor: "group-active:text-stone-50",
        borderColor: "group-active:border-stone-50",
        outlineColor: "group-active:outline-stone-50",
      },
      dark: {
        bgColor: "dark:bg-stone-50",
        textColor: "dark:text-stone-50",
        borderColor: "dark:border-stone-50",
        outlineColor: "dark:outline-stone-50",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-50 dark:focus-visible:bg-stone-50",
        textColor: "dark:hover:text-stone-50 dark:focus-visible:text-stone-50",
        borderColor:
          "dark:hover:border-stone-50 dark:focus-visible:border-stone-50",
        outlineColor:
          "dark:hover:outline-stone-50 dark:focus-visible:outline-stone-50",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-50 dark:group-focus-visible:bg-stone-50",
        textColor:
          "dark:group-hover:text-stone-50 dark:group-focus-visible:text-stone-50",
        borderColor:
          "dark:group-hover:border-stone-50 dark:group-focus-visible:border-stone-50",
        outlineColor:
          "dark:group-hover:outline-stone-50 dark:group-focus-visible:outline-stone-50",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-50",
        textColor: "dark:active:text-stone-50",
        borderColor: "dark:active:border-stone-50",
        outlineColor: "dark:active:outline-stone-50",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-50",
        textColor: "dark:group-active:text-stone-50",
        borderColor: "dark:group-active:border-stone-50",
        outlineColor: "dark:group-active:outline-stone-50",
      },
    },
    darkHighlightedShade: {
      regular: {
        bgColor: "bg-stone-200",
        textColor: "text-stone-200",
        borderColor: "border-stone-200",
        outlineColor: "outline-stone-200",
      },
      hover: {
        bgColor: "hover:bg-stone-200 focus-visible:bg-stone-200",
        textColor: "hover:text-stone-200 focus-visible:text-stone-200",
        borderColor: "hover:border-stone-200 focus-visible:border-stone-200",
        outlineColor: "hover:outline-stone-200 focus-visible:outline-stone-200",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-200 group-focus-visible:bg-stone-200",
        textColor:
          "group-hover:text-stone-200 group-focus-visible:text-stone-200",
        borderColor:
          "group-hover:border-stone-200 group-focus-visible:border-stone-200",
        outlineColor:
          "group-hover:outline-stone-200 group-focus-visible:outline-stone-200",
      },
      active: {
        bgColor: "active:bg-stone-200",
        textColor: "active:text-stone-200",
        borderColor: "active:border-stone-200",
        outlineColor: "active:outline-stone-200",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-200",
        textColor: "group-active:text-stone-200",
        borderColor: "group-active:border-stone-200",
        outlineColor: "group-active:outline-stone-200",
      },
      dark: {
        bgColor: "dark:bg-stone-200",
        textColor: "dark:text-stone-200",
        borderColor: "dark:border-stone-200",
        outlineColor: "dark:outline-stone-200",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-200 dark:focus-visible:bg-stone-200",
        textColor:
          "dark:hover:text-stone-200 dark:focus-visible:text-stone-200",
        borderColor:
          "dark:hover:border-stone-200 dark:focus-visible:border-stone-200",
        outlineColor:
          "dark:hover:outline-stone-200 dark:focus-visible:outline-stone-200",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-200 dark:group-focus-visible:bg-stone-200",
        textColor:
          "dark:group-hover:text-stone-200 dark:group-focus-visible:text-stone-200",
        borderColor:
          "dark:group-hover:border-stone-200 dark:group-focus-visible:border-stone-200",
        outlineColor:
          "dark:group-hover:outline-stone-200 dark:group-focus-visible:outline-stone-200",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-200",
        textColor: "dark:active:text-stone-200",
        borderColor: "dark:active:border-stone-200",
        outlineColor: "dark:active:outline-stone-200",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-200",
        textColor: "dark:group-active:text-stone-200",
        borderColor: "dark:group-active:border-stone-200",
        outlineColor: "dark:group-active:outline-stone-200",
      },
    },
    darkActiveShade: {
      regular: {
        bgColor: "bg-stone-300",
        textColor: "text-stone-300",
        borderColor: "border-stone-300",
        outlineColor: "outline-stone-300",
      },
      hover: {
        bgColor: "hover:bg-stone-300 focus-visible:bg-stone-300",
        textColor: "hover:text-stone-300 focus-visible:text-stone-300",
        borderColor: "hover:border-stone-300 focus-visible:border-stone-300",
        outlineColor: "hover:outline-stone-300 focus-visible:outline-stone-300",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-300 group-focus-visible:bg-stone-300",
        textColor:
          "group-hover:text-stone-300 group-focus-visible:text-stone-300",
        borderColor:
          "group-hover:border-stone-300 group-focus-visible:border-stone-300",
        outlineColor:
          "group-hover:outline-stone-300 group-focus-visible:outline-stone-300",
      },
      active: {
        bgColor: "active:bg-stone-300",
        textColor: "active:text-stone-300",
        borderColor: "active:border-stone-300",
        outlineColor: "active:outline-stone-300",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-300",
        textColor: "group-active:text-stone-300",
        borderColor: "group-active:border-stone-300",
        outlineColor: "group-active:outline-stone-300",
      },
      dark: {
        bgColor: "dark:bg-stone-300",
        textColor: "dark:text-stone-300",
        borderColor: "dark:border-stone-300",
        outlineColor: "dark:outline-stone-300",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-300 dark:focus-visible:bg-stone-300",
        textColor:
          "dark:hover:text-stone-300 dark:focus-visible:text-stone-300",
        borderColor:
          "dark:hover:border-stone-300 dark:focus-visible:border-stone-300",
        outlineColor:
          "dark:hover:outline-stone-300 dark:focus-visible:outline-stone-300",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-300 dark:group-focus-visible:bg-stone-300",
        textColor:
          "dark:group-hover:text-stone-300 dark:group-focus-visible:text-stone-300",
        borderColor:
          "dark:group-hover:border-stone-300 dark:group-focus-visible:border-stone-300",
        outlineColor:
          "dark:group-hover:outline-stone-300 dark:group-focus-visible:outline-stone-300",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-300",
        textColor: "dark:active:text-stone-300",
        borderColor: "dark:active:border-stone-300",
        outlineColor: "dark:active:outline-stone-300",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-300",
        textColor: "dark:group-active:text-stone-300",
        borderColor: "dark:group-active:border-stone-300",
        outlineColor: "dark:group-active:outline-stone-300",
      },
    },
  },
  black: {
    lightShade: {
      regular: {
        bgColor: "bg-stone-950",
        textColor: "text-stone-950",
        borderColor: "border-stone-950",
        outlineColor: "outline-stone-950",
      },
      hover: {
        bgColor: "hover:bg-stone-950 focus-visible:bg-stone-950",
        textColor: "hover:text-stone-950 focus-visible:text-stone-950",
        borderColor: "hover:border-stone-950 focus-visible:border-stone-950",
        outlineColor: "hover:outline-stone-950 focus-visible:outline-stone-950",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-950 group-focus-visible:bg-stone-950",
        textColor:
          "group-hover:text-stone-950 group-focus-visible:text-stone-950",
        borderColor:
          "group-hover:border-stone-950 group-focus-visible:border-stone-950",
        outlineColor:
          "group-hover:outline-stone-950 group-focus-visible:outline-stone-950",
      },
      active: {
        bgColor: "active:bg-stone-950",
        textColor: "active:text-stone-950",
        borderColor: "active:border-stone-950",
        outlineColor: "active:outline-stone-950",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-950",
        textColor: "group-active:text-stone-950",
        borderColor: "group-active:border-stone-950",
        outlineColor: "group-active:outline-stone-950",
      },
      dark: {
        bgColor: "dark:bg-stone-950",
        textColor: "dark:text-stone-950",
        borderColor: "dark:border-stone-950",
        outlineColor: "dark:outline-stone-950",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-950 dark:focus-visible:bg-stone-950",
        textColor:
          "dark:hover:text-stone-950 dark:focus-visible:text-stone-950",
        borderColor:
          "dark:hover:border-stone-950 dark:focus-visible:border-stone-950",
        outlineColor:
          "dark:hover:outline-stone-950 dark:focus-visible:outline-stone-950",
      },
      darkGroupActive: {
        bgColor:
          "dark:group-hover:bg-stone-950 dark:group-focus-visible:bg-stone-950",
        textColor:
          "dark:group-hover:text-stone-950 dark:group-focus-visible:text-stone-950",
        borderColor:
          "dark:group-hover:border-stone-950 dark:group-focus-visible:border-stone-950",
        outlineColor:
          "dark:group-hover:outline-stone-950 dark:group-focus-visible:outline-stone-950",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-950",
        textColor: "dark:active:text-stone-950",
        borderColor: "dark:active:border-stone-950",
        outlineColor: "dark:active:outline-stone-950",
      },
      darkGroupHover: {
        bgColor: "dark:group-active:bg-stone-950",
        textColor: "dark:group-active:text-stone-950",
        borderColor: "dark:group-active:border-stone-950",
        outlineColor: "dark:group-active:outline-stone-950",
      },
    },
    lightHighlightedShade: {
      regular: {
        bgColor: "bg-stone-900",
        textColor: "text-stone-900",
        borderColor: "border-stone-900",
        outlineColor: "outline-stone-900",
      },
      hover: {
        bgColor: "hover:bg-stone-900 focus-visible:bg-stone-900",
        textColor: "hover:text-stone-900 focus-visible:text-stone-900",
        borderColor: "hover:border-stone-900 focus-visible:border-stone-900",
        outlineColor: "hover:outline-stone-900 focus-visible:outline-stone-900",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-900 group-focus-visible:bg-stone-900",
        textColor:
          "group-hover:text-stone-900 group-focus-visible:text-stone-900",
        borderColor:
          "group-hover:border-stone-900 group-focus-visible:border-stone-900",
        outlineColor:
          "group-hover:outline-stone-900 group-focus-visible:outline-stone-900",
      },
      active: {
        bgColor: "active:bg-stone-900",
        textColor: "active:text-stone-900",
        borderColor: "active:border-stone-900",
        outlineColor: "active:outline-stone-900",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-900",
        textColor: "group-active:text-stone-900",
        borderColor: "group-active:border-stone-900",
        outlineColor: "group-active:outline-stone-900",
      },
      dark: {
        bgColor: "dark:bg-stone-900",
        textColor: "dark:text-stone-900",
        borderColor: "dark:border-stone-900",
        outlineColor: "dark:outline-stone-900",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-900 dark:focus-visible:bg-stone-900",
        textColor:
          "dark:hover:text-stone-900 dark:focus-visible:text-stone-900",
        borderColor:
          "dark:hover:border-stone-900 dark:focus-visible:border-stone-900",
        outlineColor:
          "dark:hover:outline-stone-900 dark:focus-visible:outline-stone-900",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-900 dark:group-focus-visible:bg-stone-900",
        textColor:
          "dark:group-hover:text-stone-900 dark:group-focus-visible:text-stone-900",
        borderColor:
          "dark:group-hover:border-stone-900 dark:group-focus-visible:border-stone-900",
        outlineColor:
          "dark:group-hover:outline-stone-900 dark:group-focus-visible:outline-stone-900",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-900",
        textColor: "dark:active:text-stone-900",
        borderColor: "dark:active:border-stone-900",
        outlineColor: "dark:active:outline-stone-900",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-900",
        textColor: "dark:group-active:text-stone-900",
        borderColor: "dark:group-active:border-stone-900",
        outlineColor: "dark:group-active:outline-stone-900",
      },
    },
    lightActiveShade: {
      regular: {
        bgColor: "bg-stone-800",
        textColor: "text-stone-800",
        borderColor: "border-stone-800",
        outlineColor: "outline-stone-800",
      },
      hover: {
        bgColor: "hover:bg-stone-800 focus-visible:bg-stone-800",
        textColor: "hover:text-stone-800 focus-visible:text-stone-800",
        borderColor: "hover:border-stone-800 focus-visible:border-stone-800",
        outlineColor: "hover:outline-stone-800 focus-visible:outline-stone-800",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-800 group-focus-visible:bg-stone-800",
        textColor:
          "group-hover:text-stone-800 group-focus-visible:text-stone-800",
        borderColor:
          "group-hover:border-stone-800 group-focus-visible:border-stone-800",
        outlineColor:
          "group-hover:outline-stone-800 group-focus-visible:outline-stone-800",
      },
      active: {
        bgColor: "active:bg-stone-800",
        textColor: "active:text-stone-800",
        borderColor: "active:border-stone-800",
        outlineColor: "active:outline-stone-800",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-800",
        textColor: "group-active:text-stone-800",
        borderColor: "group-active:border-stone-800",
        outlineColor: "group-active:outline-stone-800",
      },
      dark: {
        bgColor: "dark:bg-stone-800",
        textColor: "dark:text-stone-800",
        borderColor: "dark:border-stone-800",
        outlineColor: "dark:outline-stone-800",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-800 dark:focus-visible:bg-stone-800",
        textColor:
          "dark:hover:text-stone-800 dark:focus-visible:text-stone-800",
        borderColor:
          "dark:hover:border-stone-800 dark:focus-visible:border-stone-800",
        outlineColor:
          "dark:hover:outline-stone-800 dark:focus-visible:outline-stone-800",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-800 dark:group-focus-visible:bg-stone-800",
        textColor:
          "dark:group-hover:text-stone-800 dark:group-focus-visible:text-stone-800",
        borderColor:
          "dark:group-hover:border-stone-800 dark:group-focus-visible:border-stone-800",
        outlineColor:
          "dark:group-hover:outline-stone-800 dark:group-focus-visible:outline-stone-800",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-800",
        textColor: "dark:active:text-stone-800",
        borderColor: "dark:active:border-stone-800",
        outlineColor: "dark:active:outline-stone-800",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-800",
        textColor: "dark:group-active:text-stone-800",
        borderColor: "dark:group-active:border-stone-800",
        outlineColor: "dark:group-active:outline-stone-800",
      },
    },
    darkShade: {
      regular: {
        bgColor: "bg-stone-950",
        textColor: "text-stone-950",
        borderColor: "border-stone-950",
        outlineColor: "outline-stone-950",
      },
      hover: {
        bgColor: "hover:bg-stone-950 focus-visible:bg-stone-950",
        textColor: "hover:text-stone-950 focus-visible:text-stone-950",
        borderColor: "hover:border-stone-950 focus-visible:border-stone-950",
        outlineColor: "hover:outline-stone-950 focus-visible:outline-stone-950",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-950 group-focus-visible:bg-stone-950",
        textColor:
          "group-hover:text-stone-950 group-focus-visible:text-stone-950",
        borderColor:
          "group-hover:border-stone-950 group-focus-visible:border-stone-950",
        outlineColor:
          "group-hover:outline-stone-950 group-focus-visible:outline-stone-950",
      },
      active: {
        bgColor: "active:bg-stone-950",
        textColor: "active:text-stone-950",
        borderColor: "active:border-stone-950",
        outlineColor: "active:outline-stone-950",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-950",
        textColor: "group-active:text-stone-950",
        borderColor: "group-active:border-stone-950",
        outlineColor: "group-active:outline-stone-950",
      },
      dark: {
        bgColor: "dark:bg-stone-950",
        textColor: "dark:text-stone-950",
        borderColor: "dark:border-stone-950",
        outlineColor: "dark:outline-stone-950",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-950 dark:focus-visible:bg-stone-950",
        textColor:
          "dark:hover:text-stone-950 dark:focus-visible:text-stone-950",
        borderColor:
          "dark:hover:border-stone-950 dark:focus-visible:border-stone-950",
        outlineColor:
          "dark:hover:outline-stone-950 dark:focus-visible:outline-stone-950",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-950 dark:group-focus-visible:bg-stone-950",
        textColor:
          "dark:group-hover:text-stone-950 dark:group-focus-visible:text-stone-950",
        borderColor:
          "dark:group-hover:border-stone-950 dark:group-focus-visible:border-stone-950",
        outlineColor:
          "dark:group-hover:outline-stone-950 dark:group-focus-visible:outline-stone-950",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-950",
        textColor: "dark:active:text-stone-950",
        borderColor: "dark:active:border-stone-950",
        outlineColor: "dark:active:outline-stone-950",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-950",
        textColor: "dark:group-active:text-stone-950",
        borderColor: "dark:group-active:border-stone-950",
        outlineColor: "dark:group-active:outline-stone-950",
      },
    },
    darkHighlightedShade: {
      regular: {
        bgColor: "bg-stone-900",
        textColor: "text-stone-900",
        borderColor: "border-stone-900",
        outlineColor: "outline-stone-900",
      },
      hover: {
        bgColor: "hover:bg-stone-900 focus-visible:bg-stone-900",
        textColor: "hover:text-stone-900 focus-visible:text-stone-900",
        borderColor: "hover:border-stone-900 focus-visible:border-stone-900",
        outlineColor: "hover:outline-stone-900 focus-visible:outline-stone-900",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-900 group-focus-visible:bg-stone-900",
        textColor:
          "group-hover:text-stone-900 group-focus-visible:text-stone-900",
        borderColor:
          "group-hover:border-stone-900 group-focus-visible:border-stone-900",
        outlineColor:
          "group-hover:outline-stone-900 group-focus-visible:outline-stone-900",
      },
      active: {
        bgColor: "active:bg-stone-900",
        textColor: "active:text-stone-900",
        borderColor: "active:border-stone-900",
        outlineColor: "active:outline-stone-900",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-900",
        textColor: "group-active:text-stone-900",
        borderColor: "group-active:border-stone-900",
        outlineColor: "group-active:outline-stone-900",
      },
      dark: {
        bgColor: "dark:bg-stone-900",
        textColor: "dark:text-stone-900",
        borderColor: "dark:border-stone-900",
        outlineColor: "dark:outline-stone-900",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-900 dark:focus-visible:bg-stone-900",
        textColor:
          "dark:hover:text-stone-900 dark:focus-visible:text-stone-900",
        borderColor:
          "dark:hover:border-stone-900 dark:focus-visible:border-stone-900",
        outlineColor:
          "dark:hover:outline-stone-900 dark:focus-visible:outline-stone-900",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-900 dark:group-focus-visible:bg-stone-900",
        textColor:
          "dark:group-hover:text-stone-900 dark:group-focus-visible:text-stone-900",
        borderColor:
          "dark:group-hover:border-stone-900 dark:group-focus-visible:border-stone-900",
        outlineColor:
          "dark:group-hover:outline-stone-900 dark:group-focus-visible:outline-stone-900",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-900",
        textColor: "dark:active:text-stone-900",
        borderColor: "dark:active:border-stone-900",
        outlineColor: "dark:active:outline-stone-900",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-900",
        textColor: "dark:group-active:text-stone-900",
        borderColor: "dark:group-active:border-stone-900",
        outlineColor: "dark:group-active:outline-stone-900",
      },
    },
    darkActiveShade: {
      regular: {
        bgColor: "bg-stone-800",
        textColor: "text-stone-800",
        borderColor: "border-stone-800",
        outlineColor: "outline-stone-800",
      },
      hover: {
        bgColor: "hover:bg-stone-800 focus-visible:bg-stone-800",
        textColor: "hover:text-stone-800 focus-visible:text-stone-800",
        borderColor: "hover:border-stone-800 focus-visible:border-stone-800",
        outlineColor: "hover:outline-stone-800 focus-visible:outline-stone-800",
      },
      groupHover: {
        bgColor: "group-hover:bg-stone-800 group-focus-visible:bg-stone-800",
        textColor:
          "group-hover:text-stone-800 group-focus-visible:text-stone-800",
        borderColor:
          "group-hover:border-stone-800 group-focus-visible:border-stone-800",
        outlineColor:
          "group-hover:outline-stone-800 group-focus-visible:outline-stone-800",
      },
      active: {
        bgColor: "active:bg-stone-800",
        textColor: "active:text-stone-800",
        borderColor: "active:border-stone-800",
        outlineColor: "active:outline-stone-800",
      },
      groupActive: {
        bgColor: "group-active:bg-stone-800",
        textColor: "group-active:text-stone-800",
        borderColor: "group-active:border-stone-800",
        outlineColor: "group-active:outline-stone-800",
      },
      dark: {
        bgColor: "dark:bg-stone-800",
        textColor: "dark:text-stone-800",
        borderColor: "dark:border-stone-800",
        outlineColor: "dark:outline-stone-800",
      },
      darkHover: {
        bgColor: "dark:hover:bg-stone-800 dark:focus-visible:bg-stone-800",
        textColor:
          "dark:hover:text-stone-800 dark:focus-visible:text-stone-800",
        borderColor:
          "dark:hover:border-stone-800 dark:focus-visible:border-stone-800",
        outlineColor:
          "dark:hover:outline-stone-800 dark:focus-visible:outline-stone-800",
      },
      darkActive: {
        bgColor: "dark:active:bg-stone-800",
        textColor: "dark:active:text-stone-800",
        borderColor: "dark:active:border-stone-800",
        outlineColor: "dark:active:outline-stone-800",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-stone-800 dark:group-focus-visible:bg-stone-800",
        textColor:
          "dark:group-hover:text-stone-800 dark:group-focus-visible:text-stone-800",
        borderColor:
          "dark:group-hover:border-stone-800 dark:group-focus-visible:border-stone-800",
        outlineColor:
          "dark:group-hover:outline-stone-800 dark:group-focus-visible:outline-stone-800",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-stone-800",
        textColor: "dark:group-active:text-stone-800",
        borderColor: "dark:group-active:border-stone-800",
        outlineColor: "dark:group-active:outline-stone-800",
      },
    },
  },
  primary: {
    lightShade: {
      regular: {
        bgColor: "bg-primary-200",
        textColor: "text-primary-200",
        borderColor: "border-primary-200",
        outlineColor: "outline-primary-200",
      },
      hover: {
        bgColor: "hover:bg-primary-200 focus-visible:bg-primary-200",
        textColor: "hover:text-primary-200 focus-visible:text-primary-200",
        borderColor:
          "hover:border-primary-200 focus-visible:border-primary-200",
        outlineColor:
          "hover:outline-primary-200 focus-visible:outline-primary-200",
      },
      active: {
        bgColor: "active:bg-primary-200",
        textColor: "active:text-primary-200",
        borderColor: "active:border-primary-200",
        outlineColor: "active:outline-primary-200",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-primary-200 group-focus-visible:bg-primary-200",
        textColor:
          "group-hover:text-primary-200 group-focus-visible:text-primary-200",
        borderColor:
          "group-hover:border-primary-200 group-focus-visible:border-primary-200",
        outlineColor:
          "group-hover:outline-primary-200 group-focus-visible:outline-primary-200",
      },
      groupActive: {
        bgColor: "group-active:bg-primary-200",
        textColor: "group-active:text-primary-200",
        borderColor: "group-active:border-primary-200",
        outlineColor: "group-active:outline-primary-200",
      },
      dark: {
        bgColor: "dark:bg-primary-200",
        textColor: "dark:text-primary-200",
        borderColor: "dark:border-primary-200",
        outlineColor: "dark:outline-primary-200",
      },
      darkHover: {
        bgColor: "dark:hover:bg-primary-200 dark:focus-visible:bg-primary-200",
        textColor:
          "dark:hover:text-primary-200 dark:focus-visible:text-primary-200",
        borderColor:
          "dark:hover:border-primary-200 dark:focus-visible:border-primary-200",
        outlineColor:
          "dark:hover:outline-primary-200 dark:focus-visible:outline-primary-200",
      },
      darkActive: {
        bgColor: "dark:active:bg-primary-200",
        textColor: "dark:active:text-primary-200",
        borderColor: "dark:active:border-primary-200",
        outlineColor: "dark:active:outline-primary-200",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-primary-200 dark:group-focus-visible:bg-primary-200",
        textColor:
          "dark:group-hover:text-primary-200 dark:group-focus-visible:text-primary-200",
        borderColor:
          "dark:group-hover:border-primary-200 dark:group-focus-visible:border-primary-200",
        outlineColor:
          "dark:group-hover:outline-primary-200 dark:group-focus-visible:outline-primary-200",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-primary-200",
        textColor: "dark:group-active:text-primary-200",
        borderColor: "dark:group-active:border-primary-200",
        outlineColor: "dark:group-active:outline-primary-200",
      },
    },
    lightHighlightedShade: {
      regular: {
        bgColor: "bg-primary-100",
        textColor: "text-primary-100",
        borderColor: "border-primary-100",
        outlineColor: "outline-primary-100",
      },
      hover: {
        bgColor: "hover:bg-primary-100 focus-visible:bg-primary-100",
        textColor: "hover:text-primary-100 focus-visible:text-primary-100",
        borderColor:
          "hover:border-primary-100 focus-visible:border-primary-100",
        outlineColor:
          "hover:outline-primary-100 focus-visible:outline-primary-100",
      },
      active: {
        bgColor: "active:bg-primary-100",
        textColor: "active:text-primary-100",
        borderColor: "active:border-primary-100",
        outlineColor: "active:outline-primary-100",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-primary-100 group-focus-visible:bg-primary-100",
        textColor:
          "group-hover:text-primary-100 group-focus-visible:text-primary-100",
        borderColor:
          "group-hover:border-primary-100 group-focus-visible:border-primary-100",
        outlineColor:
          "group-hover:outline-primary-100 group-focus-visible:outline-primary-100",
      },
      groupActive: {
        bgColor: "group-active:bg-primary-100",
        textColor: "group-active:text-primary-100",
        borderColor: "group-active:border-primary-100",
        outlineColor: "group-active:outline-primary-100",
      },
      dark: {
        bgColor: "dark:bg-primary-100",
        textColor: "dark:text-primary-100",
        borderColor: "dark:border-primary-100",
        outlineColor: "dark:outline-primary-100",
      },
      darkHover: {
        bgColor: "dark:hover:bg-primary-100 dark:focus-visible:bg-primary-100",
        textColor:
          "dark:hover:text-primary-100 dark:focus-visible:text-primary-100",
        borderColor:
          "dark:hover:border-primary-100 dark:focus-visible:border-primary-100",
        outlineColor:
          "dark:hover:outline-primary-100 dark:focus-visible:outline-primary-100",
      },
      darkActive: {
        bgColor: "dark:active:bg-primary-100",
        textColor: "dark:active:text-primary-100",
        borderColor: "dark:active:border-primary-100",
        outlineColor: "dark:active:outline-primary-100",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-primary-100 dark:group-focus-visible:bg-primary-100",
        textColor:
          "dark:group-hover:text-primary-100 dark:group-focus-visible:text-primary-100",
        borderColor:
          "dark:group-hover:border-primary-100 dark:group-focus-visible:border-primary-100",
        outlineColor:
          "dark:group-hover:outline-primary-100 dark:group-focus-visible:outline-primary-100",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-primary-100",
        textColor: "dark:group-active:text-primary-100",
        borderColor: "dark:group-active:border-primary-100",
        outlineColor: "dark:group-active:outline-primary-100",
      },
    },
    lightActiveShade: {
      regular: {
        bgColor: "bg-primary-50",
        textColor: "text-primary-50",
        borderColor: "border-primary-50",
        outlineColor: "outline-primary-50",
      },
      hover: {
        bgColor: "hover:bg-primary-50 focus-visible:bg-primary-50",
        textColor: "hover:text-primary-50 focus-visible:text-primary-50",
        borderColor: "hover:border-primary-50 focus-visible:border-primary-50",
        outlineColor:
          "hover:outline-primary-50 focus-visible:outline-primary-50",
      },
      active: {
        bgColor: "active:bg-primary-50",
        textColor: "active:text-primary-50",
        borderColor: "active:border-primary-50",
        outlineColor: "active:outline-primary-50",
      },
      groupHover: {
        bgColor: "group-hover:bg-primary-50 group-focus-visible:bg-primary-50",
        textColor:
          "group-hover:text-primary-50 group-focus-visible:text-primary-50",
        borderColor:
          "group-hover:border-primary-50 group-focus-visible:border-primary-50",
        outlineColor:
          "group-hover:outline-primary-50 group-focus-visible:outline-primary-50",
      },
      groupActive: {
        bgColor: "group-active:bg-primary-50",
        textColor: "group-active:text-primary-50",
        borderColor: "group-active:border-primary-50",
        outlineColor: "group-active:outline-primary-50",
      },
      dark: {
        bgColor: "dark:bg-primary-50",
        textColor: "dark:text-primary-50",
        borderColor: "dark:border-primary-50",
        outlineColor: "dark:outline-primary-50",
      },
      darkHover: {
        bgColor: "dark:hover:bg-primary-50 dark:focus-visible:bg-primary-50",
        textColor:
          "dark:hover:text-primary-50 dark:focus-visible:text-primary-50",
        borderColor:
          "dark:hover:border-primary-50 dark:focus-visible:border-primary-50",
        outlineColor:
          "dark:hover:outline-primary-50 dark:focus-visible:outline-primary-50",
      },
      darkActive: {
        bgColor: "dark:active:bg-primary-50",
        textColor: "dark:active:text-primary-50",
        borderColor: "dark:active:border-primary-50",
        outlineColor: "dark:active:outline-primary-50",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-primary-50 dark:group-focus-visible:bg-primary-50",
        textColor:
          "dark:group-hover:text-primary-50 dark:group-focus-visible:text-primary-50",
        borderColor:
          "dark:group-hover:border-primary-50 dark:group-focus-visible:border-primary-50",
        outlineColor:
          "dark:group-hover:outline-primary-50 dark:group-focus-visible:outline-primary-50",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-primary-50",
        textColor: "dark:group-active:text-primary-50",
        borderColor: "dark:group-active:border-primary-50",
        outlineColor: "dark:group-active:outline-primary-50",
      },
    },
    darkShade: {
      regular: {
        bgColor: "bg-primary-600",
        textColor: "text-primary-600",
        borderColor: "border-primary-600",
        outlineColor: "outline-primary-600",
      },
      hover: {
        bgColor: "hover:bg-primary-600 focus-visible:bg-primary-600",
        textColor: "hover:text-primary-600 focus-visible:text-primary-600",
        borderColor:
          "hover:border-primary-600 focus-visible:border-primary-600",
        outlineColor:
          "hover:outline-primary-600 focus-visible:outline-primary-600",
      },
      active: {
        bgColor: "active:bg-primary-600",
        textColor: "active:text-primary-600",
        borderColor: "active:border-primary-600",
        outlineColor: "active:outline-primary-600",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-primary-600 group-focus-visible:bg-primary-600",
        textColor:
          "group-hover:text-primary-600 group-focus-visible:text-primary-600",
        borderColor:
          "group-hover:border-primary-600 group-focus-visible:border-primary-600",
        outlineColor:
          "group-hover:outline-primary-600 group-focus-visible:outline-primary-600",
      },
      groupActive: {
        bgColor: "group-active:bg-primary-600",
        textColor: "group-active:text-primary-600",
        borderColor: "group-active:border-primary-600",
        outlineColor: "group-active:outline-primary-600",
      },
      dark: {
        bgColor: "dark:bg-primary-600",
        textColor: "dark:text-primary-600",
        borderColor: "dark:border-primary-600",
        outlineColor: "dark:outline-primary-600",
      },
      darkHover: {
        bgColor: "dark:hover:bg-primary-600 dark:focus-visible:bg-primary-600",
        textColor:
          "dark:hover:text-primary-600 dark:focus-visible:text-primary-600",
        borderColor:
          "dark:hover:border-primary-600 dark:focus-visible:border-primary-600",
        outlineColor:
          "dark:hover:outline-primary-600 dark:focus-visible:outline-primary-600",
      },
      darkActive: {
        bgColor: "dark:active:bg-primary-600",
        textColor: "dark:active:text-primary-600",
        borderColor: "dark:active:border-primary-600",
        outlineColor: "dark:active:outline-primary-600",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-primary-600 dark:group-focus-visible:bg-primary-600",
        textColor:
          "dark:group-hover:text-primary-600 dark:group-focus-visible:text-primary-600",
        borderColor:
          "dark:group-hover:border-primary-600 dark:group-focus-visible:border-primary-600",
        outlineColor:
          "dark:group-hover:outline-primary-600 dark:group-focus-visible:outline-primary-600",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-primary-600",
        textColor: "dark:group-active:text-primary-600",
        borderColor: "dark:group-active:border-primary-600",
        outlineColor: "dark:group-active:outline-primary-600",
      },
    },
    darkHighlightedShade: {
      regular: {
        bgColor: "bg-primary-700",
        textColor: "text-primary-700",
        borderColor: "border-primary-700",
        outlineColor: "outline-primary-700",
      },
      hover: {
        bgColor: "hover:bg-primary-700 focus-visible:bg-primary-700",
        textColor: "hover:text-primary-700 focus-visible:text-primary-700",
        borderColor:
          "hover:border-primary-700 focus-visible:border-primary-700",
        outlineColor:
          "hover:outline-primary-700 focus-visible:outline-primary-700",
      },
      active: {
        bgColor: "active:bg-primary-700",
        textColor: "active:text-primary-700",
        borderColor: "active:border-primary-700",
        outlineColor: "active:outline-primary-700",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-primary-700 group-focus-visible:bg-primary-700",
        textColor:
          "group-hover:text-primary-700 group-focus-visible:text-primary-700",
        borderColor:
          "group-hover:border-primary-700 group-focus-visible:border-primary-700",
        outlineColor:
          "group-hover:outline-primary-700 group-focus-visible:outline-primary-700",
      },
      groupActive: {
        bgColor: "group-active:bg-primary-700",
        textColor: "group-active:text-primary-700",
        borderColor: "group-active:border-primary-700",
        outlineColor: "group-active:outline-primary-700",
      },
      dark: {
        bgColor: "dark:bg-primary-700",
        textColor: "dark:text-primary-700",
        borderColor: "dark:border-primary-700",
        outlineColor: "dark:outline-primary-700",
      },
      darkHover: {
        bgColor: "dark:hover:bg-primary-700 dark:focus-visible:bg-primary-700",
        textColor:
          "dark:hover:text-primary-700 dark:focus-visible:text-primary-700",
        borderColor:
          "dark:hover:border-primary-700 dark:focus-visible:border-primary-700",
        outlineColor:
          "dark:hover:outline-primary-700 dark:focus-visible:outline-primary-700",
      },
      darkActive: {
        bgColor: "dark:active:bg-primary-700",
        textColor: "dark:active:text-primary-700",
        borderColor: "dark:active:border-primary-700",
        outlineColor: "dark:active:outline-primary-700",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-primary-700 dark:group-focus-visible:bg-primary-700",
        textColor:
          "dark:group-hover:text-primary-700 dark:group-focus-visible:text-primary-700",
        borderColor:
          "dark:group-hover:border-primary-700 dark:group-focus-visible:border-primary-700",
        outlineColor:
          "dark:group-hover:outline-primary-700 dark:group-focus-visible:outline-primary-700",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-primary-700",
        textColor: "dark:group-active:text-primary-700",
        borderColor: "dark:group-active:border-primary-700",
        outlineColor: "dark:group-active:outline-primary-700",
      },
    },
    darkActiveShade: {
      regular: {
        bgColor: "bg-primary-800",
        textColor: "text-primary-800",
        borderColor: "border-primary-800",
        outlineColor: "outline-primary-800",
      },
      hover: {
        bgColor: "hover:bg-primary-800 focus-visible:bg-primary-800",
        textColor: "hover:text-primary-800 focus-visible:text-primary-800",
        borderColor:
          "hover:border-primary-800 focus-visible:border-primary-800",
        outlineColor:
          "hover:outline-primary-800 focus-visible:outline-primary-800",
      },
      active: {
        bgColor: "active:bg-primary-800",
        textColor: "active:text-primary-800",
        borderColor: "active:border-primary-800",
        outlineColor: "active:outline-primary-800",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-primary-800 group-focus-visible:bg-primary-800",
        textColor:
          "group-hover:text-primary-800 group-focus-visible:text-primary-800",
        borderColor:
          "group-hover:border-primary-800 group-focus-visible:border-primary-800",
        outlineColor:
          "group-hover:outline-primary-800 group-focus-visible:outline-primary-800",
      },
      groupActive: {
        bgColor: "group-active:bg-primary-800",
        textColor: "group-active:text-primary-800",
        borderColor: "group-active:border-primary-800",
        outlineColor: "group-active:outline-primary-800",
      },
      dark: {
        bgColor: "dark:bg-primary-800",
        textColor: "dark:text-primary-800",
        borderColor: "dark:border-primary-800",
        outlineColor: "dark:outline-primary-800",
      },
      darkHover: {
        bgColor: "dark:hover:bg-primary-800 dark:focus-visible:bg-primary-800",
        textColor:
          "dark:hover:text-primary-800 dark:focus-visible:text-primary-800",
        borderColor:
          "dark:hover:border-primary-800 dark:focus-visible:border-primary-800",
        outlineColor:
          "dark:hover:outline-primary-800 dark:focus-visible:outline-primary-800",
      },
      darkActive: {
        bgColor: "dark:active:bg-primary-800",
        textColor: "dark:active:text-primary-800",
        borderColor: "dark:active:border-primary-800",
        outlineColor: "dark:active:outline-primary-800",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-primary-800 dark:group-focus-visible:bg-primary-800",
        textColor:
          "dark:group-hover:text-primary-800 dark:group-focus-visible:text-primary-800",
        borderColor:
          "dark:group-hover:border-primary-800 dark:group-focus-visible:border-primary-800",
        outlineColor:
          "dark:group-hover:outline-primary-800 dark:group-focus-visible:outline-primary-800",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-primary-800",
        textColor: "dark:group-active:text-primary-800",
        borderColor: "dark:group-active:border-primary-800",
        outlineColor: "dark:group-active:outline-primary-800",
      },
    },
  },
  secondary: {
    lightShade: {
      regular: {
        bgColor: "bg-secondary-200",
        textColor: "text-secondary-200",
        borderColor: "border-secondary-200",
        outlineColor: "outline-secondary-200",
      },
      hover: {
        bgColor: "hover:bg-secondary-200 focus-visible:bg-secondary-200",
        textColor: "hover:text-secondary-200 focus-visible:text-secondary-200",
        borderColor:
          "hover:border-secondary-200 focus-visible:border-secondary-200",
        outlineColor:
          "hover:outline-secondary-200 focus-visible:outline-secondary-200",
      },
      active: {
        bgColor: "active:bg-secondary-200",
        textColor: "active:text-secondary-200",
        borderColor: "active:border-secondary-200",
        outlineColor: "active:outline-secondary-200",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-secondary-200 group-focus-visible:bg-secondary-200",
        textColor:
          "group-hover:text-secondary-200 group-focus-visible:text-secondary-200",
        borderColor:
          "group-hover:border-secondary-200 group-focus-visible:border-secondary-200",
        outlineColor:
          "group-hover:outline-secondary-200 group-focus-visible:outline-secondary-200",
      },
      groupActive: {
        bgColor: "group-active:bg-secondary-200",
        textColor: "group-active:text-secondary-200",
        borderColor: "group-active:border-secondary-200",
        outlineColor: "group-active:outline-secondary-200",
      },
      dark: {
        bgColor: "dark:bg-secondary-200",
        textColor: "dark:text-secondary-200",
        borderColor: "dark:border-secondary-200",
        outlineColor: "dark:outline-secondary-200",
      },
      darkHover: {
        bgColor:
          "dark:hover:bg-secondary-200 dark:focus-visible:bg-secondary-200",
        textColor:
          "dark:hover:text-secondary-200 dark:focus-visible:text-secondary-200",
        borderColor:
          "dark:hover:border-secondary-200 dark:focus-visible:border-secondary-200",
        outlineColor:
          "dark:hover:outline-secondary-200 dark:focus-visible:outline-secondary-200",
      },
      darkActive: {
        bgColor: "dark:active:bg-secondary-200",
        textColor: "dark:active:text-secondary-200",
        borderColor: "dark:active:border-secondary-200",
        outlineColor: "dark:active:outline-secondary-200",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-secondary-200 dark:group-focus-visible:bg-secondary-200",
        textColor:
          "dark:group-hover:text-secondary-200 dark:group-focus-visible:text-secondary-200",
        borderColor:
          "dark:group-hover:border-secondary-200 dark:group-focus-visible:border-secondary-200",
        outlineColor:
          "dark:group-hover:outline-secondary-200 dark:group-focus-visible:outline-secondary-200",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-secondary-200",
        textColor: "dark:group-active:text-secondary-200",
        borderColor: "dark:group-active:border-secondary-200",
        outlineColor: "dark:group-active:outline-secondary-200",
      },
    },
    lightHighlightedShade: {
      regular: {
        bgColor: "bg-secondary-100",
        textColor: "text-secondary-100",
        borderColor: "border-secondary-100",
        outlineColor: "outline-secondary-100",
      },
      hover: {
        bgColor: "hover:bg-secondary-100 focus-visible:bg-secondary-100",
        textColor: "hover:text-secondary-100 focus-visible:text-secondary-100",
        borderColor:
          "hover:border-secondary-100 focus-visible:border-secondary-100",
        outlineColor:
          "hover:outline-secondary-100 focus-visible:outline-secondary-100",
      },
      active: {
        bgColor: "active:bg-secondary-100",
        textColor: "active:text-secondary-100",
        borderColor: "active:border-secondary-100",
        outlineColor: "active:outline-secondary-100",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-secondary-100 group-focus-visible:bg-secondary-100",
        textColor:
          "group-hover:text-secondary-100 group-focus-visible:text-secondary-100",
        borderColor:
          "group-hover:border-secondary-100 group-focus-visible:border-secondary-100",
        outlineColor:
          "group-hover:outline-secondary-100 group-focus-visible:outline-secondary-100",
      },
      groupActive: {
        bgColor: "group-active:bg-secondary-100",
        textColor: "group-active:text-secondary-100",
        borderColor: "group-active:border-secondary-100",
        outlineColor: "group-active:outline-secondary-100",
      },
      dark: {
        bgColor: "dark:bg-secondary-100",
        textColor: "dark:text-secondary-100",
        borderColor: "dark:border-secondary-100",
        outlineColor: "dark:outline-secondary-100",
      },
      darkHover: {
        bgColor:
          "dark:hover:bg-secondary-100 dark:focus-visible:bg-secondary-100",
        textColor:
          "dark:hover:text-secondary-100 dark:focus-visible:text-secondary-100",
        borderColor:
          "dark:hover:border-secondary-100 dark:focus-visible:border-secondary-100",
        outlineColor:
          "dark:hover:outline-secondary-100 dark:focus-visible:outline-secondary-100",
      },
      darkActive: {
        bgColor: "dark:active:bg-secondary-100",
        textColor: "dark:active:text-secondary-100",
        borderColor: "dark:active:border-secondary-100",
        outlineColor: "dark:active:outline-secondary-100",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-secondary-100 dark:group-focus-visible:bg-secondary-100",
        textColor:
          "dark:group-hover:text-secondary-100 dark:group-focus-visible:text-secondary-100",
        borderColor:
          "dark:group-hover:border-secondary-100 dark:group-focus-visible:border-secondary-100",
        outlineColor:
          "dark:group-hover:outline-secondary-100 dark:group-focus-visible:outline-secondary-100",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-secondary-100",
        textColor: "dark:group-active:text-secondary-100",
        borderColor: "dark:group-active:border-secondary-100",
        outlineColor: "dark:group-active:outline-secondary-100",
      },
    },
    lightActiveShade: {
      regular: {
        bgColor: "bg-secondary-50",
        textColor: "text-secondary-50",
        borderColor: "border-secondary-50",
        outlineColor: "outline-secondary-50",
      },
      hover: {
        bgColor: "hover:bg-secondary-50 focus-visible:bg-secondary-50",
        textColor: "hover:text-secondary-50 focus-visible:text-secondary-50",
        borderColor:
          "hover:border-secondary-50 focus-visible:border-secondary-50",
        outlineColor:
          "hover:outline-secondary-50 focus-visible:outline-secondary-50",
      },
      active: {
        bgColor: "active:bg-secondary-50",
        textColor: "active:text-secondary-50",
        borderColor: "active:border-secondary-50",
        outlineColor: "active:outline-secondary-50",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-secondary-50 group-focus-visible:bg-secondary-50",
        textColor:
          "group-hover:text-secondary-50 group-focus-visible:text-secondary-50",
        borderColor:
          "group-hover:border-secondary-50 group-focus-visible:border-secondary-50",
        outlineColor:
          "group-hover:outline-secondary-50 group-focus-visible:outline-secondary-50",
      },
      groupActive: {
        bgColor: "group-active:bg-secondary-50",
        textColor: "group-active:text-secondary-50",
        borderColor: "group-active:border-secondary-50",
        outlineColor: "group-active:outline-secondary-50",
      },
      dark: {
        bgColor: "dark:bg-secondary-50",
        textColor: "dark:text-secondary-50",
        borderColor: "dark:border-secondary-50",
        outlineColor: "dark:outline-secondary-50",
      },
      darkHover: {
        bgColor:
          "dark:hover:bg-secondary-50 dark:focus-visible:bg-secondary-50",
        textColor:
          "dark:hover:text-secondary-50 dark:focus-visible:text-secondary-50",
        borderColor:
          "dark:hover:border-secondary-50 dark:focus-visible:border-secondary-50",
        outlineColor:
          "dark:hover:outline-secondary-50 dark:focus-visible:outline-secondary-50",
      },
      darkActive: {
        bgColor: "dark:active:bg-secondary-50",
        textColor: "dark:active:text-secondary-50",
        borderColor: "dark:active:border-secondary-50",
        outlineColor: "dark:active:outline-secondary-50",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-secondary-50 dark:group-focus-visible:bg-secondary-50",
        textColor:
          "dark:group-hover:text-secondary-50 dark:group-focus-visible:text-secondary-50",
        borderColor:
          "dark:group-hover:border-secondary-50 dark:group-focus-visible:border-secondary-50",
        outlineColor:
          "dark:group-hover:outline-secondary-50 dark:group-focus-visible:outline-secondary-50",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-secondary-50",
        textColor: "dark:group-active:text-secondary-50",
        borderColor: "dark:group-active:border-secondary-50",
        outlineColor: "dark:group-active:outline-secondary-50",
      },
    },
    darkShade: {
      regular: {
        bgColor: "bg-secondary-600",
        textColor: "text-secondary-600",
        borderColor: "border-secondary-600",
        outlineColor: "outline-secondary-600",
      },
      hover: {
        bgColor: "hover:bg-secondary-600 focus-visible:bg-secondary-600",
        textColor: "hover:text-secondary-600 focus-visible:text-secondary-600",
        borderColor:
          "hover:border-secondary-600 focus-visible:border-secondary-600",
        outlineColor:
          "hover:outline-secondary-600 focus-visible:outline-secondary-600",
      },
      active: {
        bgColor: "active:bg-secondary-600",
        textColor: "active:text-secondary-600",
        borderColor: "active:border-secondary-600",
        outlineColor: "active:outline-secondary-600",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-secondary-600 group-focus-visible:bg-secondary-600",
        textColor:
          "group-hover:text-secondary-600 group-focus-visible:text-secondary-600",
        borderColor:
          "group-hover:border-secondary-600 group-focus-visible:border-secondary-600",
        outlineColor:
          "group-hover:outline-secondary-600 group-focus-visible:outline-secondary-600",
      },
      groupActive: {
        bgColor: "group-active:bg-secondary-600",
        textColor: "group-active:text-secondary-600",
        borderColor: "group-active:border-secondary-600",
        outlineColor: "group-active:outline-secondary-600",
      },
      dark: {
        bgColor: "dark:bg-secondary-600",
        textColor: "dark:text-secondary-600",
        borderColor: "dark:border-secondary-600",
        outlineColor: "dark:outline-secondary-600",
      },
      darkHover: {
        bgColor:
          "dark:hover:bg-secondary-600 dark:focus-visible:bg-secondary-600",
        textColor:
          "dark:hover:text-secondary-600 dark:focus-visible:text-secondary-600",
        borderColor:
          "dark:hover:border-secondary-600 dark:focus-visible:border-secondary-600",
        outlineColor:
          "dark:hover:outline-secondary-600 dark:focus-visible:outline-secondary-600",
      },
      darkActive: {
        bgColor: "dark:active:bg-secondary-600",
        textColor: "dark:active:text-secondary-600",
        borderColor: "dark:active:border-secondary-600",
        outlineColor: "dark:active:outline-secondary-600",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-secondary-600 dark:group-focus-visible:bg-secondary-600",
        textColor:
          "dark:group-hover:text-secondary-600 dark:group-focus-visible:text-secondary-600",
        borderColor:
          "dark:group-hover:border-secondary-600 dark:group-focus-visible:border-secondary-600",
        outlineColor:
          "dark:group-hover:outline-secondary-600 dark:group-focus-visible:outline-secondary-600",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-secondary-600",
        textColor: "dark:group-active:text-secondary-600",
        borderColor: "dark:group-active:border-secondary-600",
        outlineColor: "dark:group-active:outline-secondary-600",
      },
    },
    darkHighlightedShade: {
      regular: {
        bgColor: "bg-secondary-700",
        textColor: "text-secondary-700",
        borderColor: "border-secondary-700",
        outlineColor: "outline-secondary-700",
      },
      hover: {
        bgColor: "hover:bg-secondary-700 focus-visible:bg-secondary-700",
        textColor: "hover:text-secondary-700 focus-visible:text-secondary-700",
        borderColor:
          "hover:border-secondary-700 focus-visible:border-secondary-700",
        outlineColor:
          "hover:outline-secondary-700 focus-visible:outline-secondary-700",
      },
      active: {
        bgColor: "active:bg-secondary-700",
        textColor: "active:text-secondary-700",
        borderColor: "active:border-secondary-700",
        outlineColor: "active:outline-secondary-700",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-secondary-700 group-focus-visible:bg-secondary-700",
        textColor:
          "group-hover:text-secondary-700 group-focus-visible:text-secondary-700",
        borderColor:
          "group-hover:border-secondary-700 group-focus-visible:border-secondary-700",
        outlineColor:
          "group-hover:outline-secondary-700 group-focus-visible:outline-secondary-700",
      },
      groupActive: {
        bgColor: "group-active:bg-secondary-700",
        textColor: "group-active:text-secondary-700",
        borderColor: "group-active:border-secondary-700",
        outlineColor: "group-active:outline-secondary-700",
      },
      dark: {
        bgColor: "dark:bg-secondary-700",
        textColor: "dark:text-secondary-700",
        borderColor: "dark:border-secondary-700",
        outlineColor: "dark:outline-secondary-700",
      },
      darkHover: {
        bgColor:
          "dark:hover:bg-secondary-700 dark:focus-visible:bg-secondary-700",
        textColor:
          "dark:hover:text-secondary-700 dark:focus-visible:text-secondary-700",
        borderColor:
          "dark:hover:border-secondary-700 dark:focus-visible:border-secondary-700",
        outlineColor:
          "dark:hover:outline-secondary-700 dark:focus-visible:outline-secondary-700",
      },
      darkActive: {
        bgColor: "dark:active:bg-secondary-700",
        textColor: "dark:active:text-secondary-700",
        borderColor: "dark:active:border-secondary-700",
        outlineColor: "dark:active:outline-secondary-700",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-secondary-700 dark:group-focus-visible:bg-secondary-700",
        textColor:
          "dark:group-hover:text-secondary-700 dark:group-focus-visible:text-secondary-700",
        borderColor:
          "dark:group-hover:border-secondary-700 dark:group-focus-visible:border-secondary-700",
        outlineColor:
          "dark:group-hover:outline-secondary-700 dark:group-focus-visible:outline-secondary-700",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-secondary-700",
        textColor: "dark:group-active:text-secondary-700",
        borderColor: "dark:group-active:border-secondary-700",
        outlineColor: "dark:group-active:outline-secondary-700",
      },
    },
    darkActiveShade: {
      regular: {
        bgColor: "bg-secondary-800",
        textColor: "text-secondary-800",
        borderColor: "border-secondary-800",
        outlineColor: "outline-secondary-800",
      },
      hover: {
        bgColor: "hover:bg-secondary-800 focus-visible:bg-secondary-800",
        textColor: "hover:text-secondary-800 focus-visible:text-secondary-800",
        borderColor:
          "hover:border-secondary-800 focus-visible:border-secondary-800",
        outlineColor:
          "hover:outline-secondary-800 focus-visible:outline-secondary-800",
      },
      active: {
        bgColor: "active:bg-secondary-800",
        textColor: "active:text-secondary-800",
        borderColor: "active:border-secondary-800",
        outlineColor: "active:outline-secondary-800",
      },
      groupHover: {
        bgColor:
          "group-hover:bg-secondary-800 group-focus-visible:bg-secondary-800",
        textColor:
          "group-hover:text-secondary-800 group-focus-visible:text-secondary-800",
        borderColor:
          "group-hover:border-secondary-800 group-focus-visible:border-secondary-800",
        outlineColor:
          "group-hover:outline-secondary-800 group-focus-visible:outline-secondary-800",
      },
      groupActive: {
        bgColor: "group-active:bg-secondary-800",
        textColor: "group-active:text-secondary-800",
        borderColor: "group-active:border-secondary-800",
        outlineColor: "group-active:outline-secondary-800",
      },
      dark: {
        bgColor: "dark:bg-secondary-800",
        textColor: "dark:text-secondary-800",
        borderColor: "dark:border-secondary-800",
        outlineColor: "dark:outline-secondary-800",
      },
      darkHover: {
        bgColor:
          "dark:hover:bg-secondary-800 dark:focus-visible:bg-secondary-800",
        textColor:
          "dark:hover:text-secondary-800 dark:focus-visible:text-secondary-800",
        borderColor:
          "dark:hover:border-secondary-800 dark:focus-visible:border-secondary-800",
        outlineColor:
          "dark:hover:outline-secondary-800 dark:focus-visible:outline-secondary-800",
      },
      darkActive: {
        bgColor: "dark:active:bg-secondary-800",
        textColor: "dark:active:text-secondary-800",
        borderColor: "dark:active:border-secondary-800",
        outlineColor: "dark:active:outline-secondary-800",
      },
      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-secondary-800 dark:group-focus-visible:bg-secondary-800",
        textColor:
          "dark:group-hover:text-secondary-800 dark:group-focus-visible:text-secondary-800",
        borderColor:
          "dark:group-hover:border-secondary-800 dark:group-focus-visible:border-secondary-800",
        outlineColor:
          "dark:group-hover:outline-secondary-800 dark:group-focus-visible:outline-secondary-800",
      },
      darkGroupActive: {
        bgColor: "dark:group-active:bg-secondary-800",
        textColor: "dark:group-active:text-secondary-800",
        borderColor: "dark:group-active:border-secondary-800",
        outlineColor: "dark:group-active:outline-secondary-800",
      },
    },
  },
  accent: {
    lightShade: {
      regular: {
        bgColor: "bg-accent-200",
        textColor: "text-accent-200",
        borderColor: "border-accent-200",
        outlineColor: "outline-accent-200",
      },

      hover: {
        bgColor: "hover:bg-accent-200 focus-visible:bg-accent-200",
        textColor: "hover:text-accent-200 focus-visible:text-accent-200",
        borderColor: "hover:border-accent-200 focus-visible:border-accent-200",
        outlineColor:
          "hover:outline-accent-200 focus-visible:outline-accent-200",
      },

      active: {
        bgColor: "active:bg-accent-200",
        textColor: "active:text-accent-200",
        borderColor: "active:border-accent-200",
        outlineColor: "active:outline-accent-200",
      },

      groupHover: {
        bgColor: "group-hover:bg-accent-200 group-focus-visible:bg-accent-200",
        textColor:
          "group-hover:text-accent-200 group-focus-visible:text-accent-200",
        borderColor:
          "group-hover:border-accent-200 group-focus-visible:border-accent-200",
        outlineColor:
          "group-hover:outline-accent-200 group-focus-visible:outline-accent-200",
      },

      groupActive: {
        bgColor: "group-active:bg-accent-200",
        textColor: "group-active:text-accent-200",
        borderColor: "group-active:border-accent-200",
        outlineColor: "group-active:outline-accent-200",
      },

      dark: {
        bgColor: "dark:bg-accent-200",
        textColor: "dark:text-accent-200",
        borderColor: "dark:border-accent-200",
        outlineColor: "dark:outline-accent-200",
      },

      darkHover: {
        bgColor: "dark:hover:bg-accent-200 dark:focus-visible:bg-accent-200",
        textColor:
          "dark:hover:text-accent-200 dark:focus-visible:text-accent-200",
        borderColor:
          "dark:hover:border-accent-200 dark:focus-visible:border-accent-200",
        outlineColor:
          "dark:hover:outline-accent-200 dark:focus-visible:outline-accent-200",
      },

      darkActive: {
        bgColor: "dark:active:bg-accent-200",
        textColor: "dark:active:text-accent-200",
        borderColor: "dark:active:border-accent-200",
        outlineColor: "dark:active:outline-accent-200",
      },

      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-accent-200 dark:group-focus-visible:bg-accent-200",
        textColor:
          "dark:group-hover:text-accent-200 dark:group-focus-visible:text-accent-200",
        borderColor:
          "dark:group-hover:border-accent-200 dark:group-focus-visible:border-accent-200",
        outlineColor:
          "dark:group-hover:outline-accent-200 dark:group-focus-visible:outline-accent-200",
      },

      darkGroupActive: {
        bgColor: "dark:group-active:bg-accent-200",
        textColor: "dark:group-active:text-accent-200",
        borderColor: "dark:group-active:border-accent-200",
        outlineColor: "dark:group-active:outline-accent-200",
      },
    },

    lightHighlightedShade: {
      regular: {
        bgColor: "bg-accent-100",
        textColor: "text-accent-100",
        borderColor: "border-accent-100",
        outlineColor: "outline-accent-100",
      },

      hover: {
        bgColor: "hover:bg-accent-100 focus-visible:bg-accent-100",
        textColor: "hover:text-accent-100 focus-visible:text-accent-100",
        borderColor: "hover:border-accent-100 focus-visible:border-accent-100",
        outlineColor:
          "hover:outline-accent-100 focus-visible:outline-accent-100",
      },

      active: {
        bgColor: "active:bg-accent-100",
        textColor: "active:text-accent-100",
        borderColor: "active:border-accent-100",
        outlineColor: "active:outline-accent-100",
      },

      groupHover: {
        bgColor: "group-hover:bg-accent-100 group-focus-visible:bg-accent-100",
        textColor:
          "group-hover:text-accent-100 group-focus-visible:text-accent-100",
        borderColor:
          "group-hover:border-accent-100 group-focus-visible:border-accent-100",
        outlineColor:
          "group-hover:outline-accent-100 group-focus-visible:outline-accent-100",
      },

      groupActive: {
        bgColor: "group-active:bg-accent-100",
        textColor: "group-active:text-accent-100",
        borderColor: "group-active:border-accent-100",
        outlineColor: "group-active:outline-accent-100",
      },

      dark: {
        bgColor: "dark:bg-accent-100",
        textColor: "dark:text-accent-100",
        borderColor: "dark:border-accent-100",
        outlineColor: "dark:outline-accent-100",
      },

      darkHover: {
        bgColor: "dark:hover:bg-accent-100 dark:focus-visible:bg-accent-100",
        textColor:
          "dark:hover:text-accent-100 dark:focus-visible:text-accent-100",
        borderColor:
          "dark:hover:border-accent-100 dark:focus-visible:border-accent-100",
        outlineColor:
          "dark:hover:outline-accent-100 dark:focus-visible:outline-accent-100",
      },

      darkActive: {
        bgColor: "dark:active:bg-accent-100",
        textColor: "dark:active:text-accent-100",
        borderColor: "dark:active:border-accent-100",
        outlineColor: "dark:active:outline-accent-100",
      },

      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-accent-100 dark:group-focus-visible:bg-accent-100",
        textColor:
          "dark:group-hover:text-accent-100 dark:group-focus-visible:text-accent-100",
        borderColor:
          "dark:group-hover:border-accent-100 dark:group-focus-visible:border-accent-100",
        outlineColor:
          "dark:group-hover:outline-accent-100 dark:group-focus-visible:outline-accent-100",
      },

      darkGroupActive: {
        bgColor: "dark:group-active:bg-accent-100",
        textColor: "dark:group-active:text-accent-100",
        borderColor: "dark:group-active:border-accent-100",
        outlineColor: "dark:group-active:outline-accent-100",
      },
    },

    lightActiveShade: {
      regular: {
        bgColor: "bg-accent-50",
        textColor: "text-accent-50",
        borderColor: "border-accent-50",
        outlineColor: "outline-accent-50",
      },

      hover: {
        bgColor: "hover:bg-accent-50 focus-visible:bg-accent-50",
        textColor: "hover:text-accent-50 focus-visible:text-accent-50",
        borderColor: "hover:border-accent-50 focus-visible:border-accent-50",
        outlineColor: "hover:outline-accent-50 focus-visible:outline-accent-50",
      },

      active: {
        bgColor: "active:bg-accent-50",
        textColor: "active:text-accent-50",
        borderColor: "active:border-accent-50",
        outlineColor: "active:outline-accent-50",
      },

      groupHover: {
        bgColor: "group-hover:bg-accent-50 group-focus-visible:bg-accent-50",
        textColor:
          "group-hover:text-accent-50 group-focus-visible:text-accent-50",
        borderColor:
          "group-hover:border-accent-50 group-focus-visible:border-accent-50",
        outlineColor:
          "group-hover:outline-accent-50 group-focus-visible:outline-accent-50",
      },

      groupActive: {
        bgColor: "group-active:bg-accent-50",
        textColor: "group-active:text-accent-50",
        borderColor: "group-active:border-accent-50",
        outlineColor: "group-active:outline-accent-50",
      },

      dark: {
        bgColor: "dark:bg-accent-50",
        textColor: "dark:text-accent-50",
        borderColor: "dark:border-accent-50",
        outlineColor: "dark:outline-accent-50",
      },

      darkHover: {
        bgColor: "dark:hover:bg-accent-50 dark:focus-visible:bg-accent-50",
        textColor:
          "dark:hover:text-accent-50 dark:focus-visible:text-accent-50",
        borderColor:
          "dark:hover:border-accent-50 dark:focus-visible:border-accent-50",
        outlineColor:
          "dark:hover:outline-accent-50 dark:focus-visible:outline-accent-50",
      },

      darkActive: {
        bgColor: "dark:active:bg-accent-50",
        textColor: "dark:active:text-accent-50",
        borderColor: "dark:active:border-accent-50",
        outlineColor: "dark:active:outline-accent-50",
      },

      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-accent-50 dark:group-focus-visible:bg-accent-50",
        textColor:
          "dark:group-hover:text-accent-50 dark:group-focus-visible:text-accent-50",
        borderColor:
          "dark:group-hover:border-accent-50 dark:group-focus-visible:border-accent-50",
        outlineColor:
          "dark:group-hover:outline-accent-50 dark:group-focus-visible:outline-accent-50",
      },

      darkGroupActive: {
        bgColor: "dark:group-active:bg-accent-50",
        textColor: "dark:group-active:text-accent-50",
        borderColor: "dark:group-active:border-accent-50",
        outlineColor: "dark:group-active:outline-accent-50",
      },
    },

    darkShade: {
      regular: {
        bgColor: "bg-accent-600",
        textColor: "text-accent-600",
        borderColor: "border-accent-600",
        outlineColor: "outline-accent-600",
      },

      hover: {
        bgColor: "hover:bg-accent-600 focus-visible:bg-accent-600",
        textColor: "hover:text-accent-600 focus-visible:text-accent-600",
        borderColor: "hover:border-accent-600 focus-visible:border-accent-600",
        outlineColor:
          "hover:outline-accent-600 focus-visible:outline-accent-600",
      },

      active: {
        bgColor: "active:bg-accent-600",
        textColor: "active:text-accent-600",
        borderColor: "active:border-accent-600",
        outlineColor: "active:outline-accent-600",
      },

      groupHover: {
        bgColor: "group-hover:bg-accent-600 group-focus-visible:bg-accent-600",
        textColor:
          "group-hover:text-accent-600 group-focus-visible:text-accent-600",
        borderColor:
          "group-hover:border-accent-600 group-focus-visible:border-accent-600",
        outlineColor:
          "group-hover:outline-accent-600 group-focus-visible:outline-accent-600",
      },

      groupActive: {
        bgColor: "group-active:bg-accent-600",
        textColor: "group-active:text-accent-600",
        borderColor: "group-active:border-accent-600",
        outlineColor: "group-active:outline-accent-600",
      },

      dark: {
        bgColor: "dark:bg-accent-600",
        textColor: "dark:text-accent-600",
        borderColor: "dark:border-accent-600",
        outlineColor: "dark:outline-accent-600",
      },

      darkHover: {
        bgColor: "dark:hover:bg-accent-600 dark:focus-visible:bg-accent-600",
        textColor:
          "dark:hover:text-accent-600 dark:focus-visible:text-accent-600",
        borderColor:
          "dark:hover:border-accent-600 dark:focus-visible:border-accent-600",
        outlineColor:
          "dark:hover:outline-accent-600 dark:focus-visible:outline-accent-600",
      },

      darkActive: {
        bgColor: "dark:active:bg-accent-600",
        textColor: "dark:active:text-accent-600",
        borderColor: "dark:active:border-accent-600",
        outlineColor: "dark:active:outline-accent-600",
      },

      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-accent-600 dark:group-focus-visible:bg-accent-600",
        textColor:
          "dark:group-hover:text-accent-600 dark:group-focus-visible:text-accent-600",
        borderColor:
          "dark:group-hover:border-accent-600 dark:group-focus-visible:border-accent-600",
        outlineColor:
          "dark:group-hover:outline-accent-600 dark:group-focus-visible:outline-accent-600",
      },

      darkGroupActive: {
        bgColor: "dark:group-active:bg-accent-600",
        textColor: "dark:group-active:text-accent-600",
        borderColor: "dark:group-active:border-accent-600",
        outlineColor: "dark:group-active:outline-accent-600",
      },
    },

    darkHighlightedShade: {
      regular: {
        bgColor: "bg-accent-700",
        textColor: "text-accent-700",
        borderColor: "border-accent-700",
        outlineColor: "outline-accent-700",
      },

      hover: {
        bgColor: "hover:bg-accent-700 focus-visible:bg-accent-700",
        textColor: "hover:text-accent-700 focus-visible:text-accent-700",
        borderColor: "hover:border-accent-700 focus-visible:border-accent-700",
        outlineColor:
          "hover:outline-accent-700 focus-visible:outline-accent-700",
      },

      active: {
        bgColor: "active:bg-accent-700",
        textColor: "active:text-accent-700",
        borderColor: "active:border-accent-700",
        outlineColor: "active:outline-accent-700",
      },

      groupHover: {
        bgColor: "group-hover:bg-accent-700 group-focus-visible:bg-accent-700",
        textColor:
          "group-hover:text-accent-700 group-focus-visible:text-accent-700",
        borderColor:
          "group-hover:border-accent-700 group-focus-visible:border-accent-700",
        outlineColor:
          "group-hover:outline-accent-700 group-focus-visible:outline-accent-700",
      },

      groupActive: {
        bgColor: "group-active:bg-accent-700",
        textColor: "group-active:text-accent-700",
        borderColor: "group-active:border-accent-700",
        outlineColor: "group-active:outline-accent-700",
      },

      dark: {
        bgColor: "dark:bg-accent-700",
        textColor: "dark:text-accent-700",
        borderColor: "dark:border-accent-700",
        outlineColor: "dark:outline-accent-700",
      },

      darkHover: {
        bgColor: "dark:hover:bg-accent-700 dark:focus-visible:bg-accent-700",
        textColor:
          "dark:hover:text-accent-700 dark:focus-visible:text-accent-700",
        borderColor:
          "dark:hover:border-accent-700 dark:focus-visible:border-accent-700",
        outlineColor:
          "dark:hover:outline-accent-700 dark:focus-visible:outline-accent-700",
      },

      darkActive: {
        bgColor: "dark:active:bg-accent-700",
        textColor: "dark:active:text-accent-700",
        borderColor: "dark:active:border-accent-700",
        outlineColor: "dark:active:outline-accent-700",
      },

      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-accent-700 dark:group-focus-visible:bg-accent-700",
        textColor:
          "dark:group-hover:text-accent-700 dark:group-focus-visible:text-accent-700",
        borderColor:
          "dark:group-hover:border-accent-700 dark:group-focus-visible:border-accent-700",
        outlineColor:
          "dark:group-hover:outline-accent-700 dark:group-focus-visible:outline-accent-700",
      },

      darkGroupActive: {
        bgColor: "dark:group-active:bg-accent-700",
        textColor: "dark:group-active:text-accent-700",
        borderColor: "dark:group-active:border-accent-700",
        outlineColor: "dark:group-active:outline-accent-700",
      },
    },

    darkActiveShade: {
      regular: {
        bgColor: "bg-accent-800",
        textColor: "text-accent-800",
        borderColor: "border-accent-800",
        outlineColor: "outline-accent-800",
      },

      hover: {
        bgColor: "hover:bg-accent-800 focus-visible:bg-accent-800",
        textColor: "hover:text-accent-800 focus-visible:text-accent-800",
        borderColor: "hover:border-accent-800 focus-visible:border-accent-800",
        outlineColor:
          "hover:outline-accent-800 focus-visible:outline-accent-800",
      },

      active: {
        bgColor: "active:bg-accent-800",
        textColor: "active:text-accent-800",
        borderColor: "active:border-accent-800",
        outlineColor: "active:outline-accent-800",
      },

      groupHover: {
        bgColor: "group-hover:bg-accent-800 group-focus-visible:bg-accent-800",
        textColor:
          "group-hover:text-accent-800 group-focus-visible:text-accent-800",
        borderColor:
          "group-hover:border-accent-800 group-focus-visible:border-accent-800",
        outlineColor:
          "group-hover:outline-accent-800 group-focus-visible:outline-accent-800",
      },

      groupActive: {
        bgColor: "group-active:bg-accent-800",
        textColor: "group-active:text-accent-800",
        borderColor: "group-active:border-accent-800",
        outlineColor: "group-active:outline-accent-800",
      },

      dark: {
        bgColor: "dark:bg-accent-800",
        textColor: "dark:text-accent-800",
        borderColor: "dark:border-accent-800",
        outlineColor: "dark:outline-accent-800",
      },

      darkHover: {
        bgColor: "dark:hover:bg-accent-800 dark:focus-visible:bg-accent-800",
        textColor:
          "dark:hover:text-accent-800 dark:focus-visible:text-accent-800",
        borderColor:
          "dark:hover:border-accent-800 dark:focus-visible:border-accent-800",
        outlineColor:
          "dark:hover:outline-accent-800 dark:focus-visible:outline-accent-800",
      },

      darkActive: {
        bgColor: "dark:active:bg-accent-800",
        textColor: "dark:active:text-accent-800",
        borderColor: "dark:active:border-accent-800",
        outlineColor: "dark:active:outline-accent-800",
      },

      darkGroupHover: {
        bgColor:
          "dark:group-hover:bg-accent-800 dark:group-focus-visible:bg-accent-800",
        textColor:
          "dark:group-hover:text-accent-800 dark:group-focus-visible:text-accent-800",
        borderColor:
          "dark:group-hover:border-accent-800 dark:group-focus-visible:border-accent-800",
        outlineColor:
          "dark:group-hover:outline-accent-800 dark:group-focus-visible:outline-accent-800",
      },

      darkGroupActive: {
        bgColor: "dark:group-active:bg-accent-800",
        textColor: "dark:group-active:text-accent-800",
        borderColor: "dark:group-active:border-accent-800",
        outlineColor: "dark:group-active:outline-accent-800",
      },
    },
  },
};
