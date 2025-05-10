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

  ".glass": {
    "@apply bg-(--bg-color)/40 backdrop-blur-xs": {},
  },

  ".backdrop": {
    "@apply fixed top-0 left-0 z-30 h-screen w-screen": {},
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

  ".border-containers": {
    "@apply border-(length:--border-containers)": {},
  },

  ".border-navigation": {
    "@apply border-(length:--border-navigation)": {},
  },

  ".navigation-decoration-top": {
    "@apply rounded-t-(length:--radius-navigation) border-t-(length:--border-navigation)":
      {},
  },

  ".navigation-decoration-bottom": {
    "@apply rounded-b-(length:--radius-navigation) border-b-(length:--border-navigation)":
      {},
  },

  ".hide-scroll": {
    animation:
      "hide-scroll var(--dropdown-animation-duration, var(--default-transition-duration));",
  },
};
