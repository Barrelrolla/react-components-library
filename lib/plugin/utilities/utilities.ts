import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".transition-anchor": {
    transitionProperty: "color, background-color, text-underline-offset;",
    transitionTimingFunction:
      "var(--tw-ease, var(--default-transition-timing-function));",
    transitionDuration:
      "var(--tw-duration, var(--default-transition-duration));",
  },

  ".transition-dropdown": {
    transitionProperty: "max-height;",
    transitionDuration:
      "var(--dropdown-animation-duration, var(--default-transition-duration));",
  },

  ".bg-main-hover": {
    backgroundColor:
      "oklch(from var(--color-main) calc(l - var(--mod-highlight)) c h);",
  },

  ".bg-main-active": {
    backgroundColor:
      "oklch(from var(--color-main) calc(l - var(--mod-highlight) * 1.5) c h);",
  },

  ".bg-hover": {
    backgroundColor: "oklch(from var(--bg-color) calc(l + var(--h)) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h)) c h);",
  },

  ".bg-hover-inverse": {
    backgroundColor: "oklch(from var(--fg-color) calc(l + var(--h) * -1) c h);",
    outlineColor: "oklch(from var(--fg-color) calc(l + var(--h) * -1) c h);",
  },

  ".bg-active": {
    backgroundColor:
      "oklch(from var(--bg-color) calc(l + var(--h) * 1.5) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h) * 1.5) c h);",
  },

  ".bg-active-inverse": {
    backgroundColor:
      "oklch(from var(--fg-color) calc(l + var(--h) * 1.5) c h);",
    outlineColor: "oklch(from var(--fg-color) calc(l + var(--h) * 1.5) c h);",
  },

  ".fg-hover": {
    color: "oklch(from var(--fg-color) calc(l + var(--h) * 2) c h);",
    outlineColor: "oklch(from var(--fg-color) calc(l + var(--h) * 2) c h);",
  },

  ".fg-active": {
    color: "oklch(from var(--fg-color) calc(l + var(--h) * 3) c h);",
    outlineColor: "oklch(from var(--fg-color) calc(l + var(--h) * 3) c h);",
  },

  ".ghost-hover": {
    color: "oklch(from var(--bg-color) calc(l + var(--h) * 2) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h) * 2) c h);",
  },

  ".ghost-active": {
    color: "oklch(from var(--bg-color) calc(l + var(--h) * 3) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h) * 3) c h);",
  },

  ".muted-bg": {
    backgroundColor:
      "color-mix(in oklab, var(--fg-color, var(--color-main-content)) 15%, var(--color-main))",
  },

  ".no-spinners": {
    "-moz-appearance": "textfield",
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: "0",
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: "0",
    },
  },

  ".arrow": {
    "@apply fill-(--fg-color)": {},
  },

  ".glass": {
    "@apply bg-main/40 backdrop-blur-xs": {},
  },

  ".rounded-inputs": {
    "@apply rounded-(--radius-inputs)": {},
  },

  ".rounded-containers": {
    "@apply rounded-(--radius-containers)": {},
  },

  ".rounded-navigation": {
    "@apply rounded-(--radius-navigation)": {},
  },

  ".border-inputs": {
    "@apply border-(length:--border-inputs) border-main-content/(--border-transparency)":
      {},
  },

  ".border-containers": {
    "@apply border-(length:--border-containers) border-(--color-main-content)/(--border-transparency)":
      {},
  },

  ".border-navigation": {
    "@apply border-(length:--border-navigation) border-main-content/(--border-transparency)":
      {},
  },

  ".navigation-decoration-top": {
    "@apply rounded-t-(--radius-navigation) border-t-(length:--border-navigation) border-main-content/(--border-transparency)":
      {},
  },

  ".navigation-decoration-bottom": {
    "@apply rounded-b-(--radius-navigation) border-b-(length:--border-navigation) border-main-content/(--border-transparency)":
      {},
  },

  ".hide-scroll": {
    animation:
      "hide-scroll var(--dropdown-animation-duration, var(--default-transition-duration));",
  },

  ".scrollbar-stable-gutter": {
    scrollbarGutter: "stable",
  },
};
