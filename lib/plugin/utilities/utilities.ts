import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".transition-anchor": {
    transitionProperty: "color, text-underline-offset;",
    transitionTimingFunction:
      "var(--tw-ease, var(--default-transition-timing-function));",
    transitionDuration:
      "var(--tw-duration, var(--default-transition-duration));",
  },

  ".bg-hover": {
    backgroundColor: "oklch(from var(--bg-color) calc(l + var(--h)) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h)) c h);",
  },

  ".bg-active": {
    backgroundColor:
      "oklch(from var(--bg-color) calc(l + var(--h) * 1.5) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h) * 1.5) c h);",
  },

  ".fg-hover": {
    color: "oklch(from var(--fg-color) calc(l + var(--h) * 4) c h);",
    outlineColor: "oklch(from var(--fg-color) calc(l + var(--h) * 4) c h);",
  },

  ".fg-active": {
    color: "oklch(from var(--fg-color) calc(l + var(--h) * 6) c h);",
    outlineColor: "oklch(from var(--fg-color) calc(l + var(--h) * 6) c h);",
  },

  ".ghost-hover": {
    color: "oklch(from var(--bg-color) calc(l + var(--h)) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h)) c h);",
  },

  ".ghost-active": {
    color: "oklch(from var(--bg-color) calc(l + var(--h) * 1.5) c h);",
    outlineColor: "oklch(from var(--bg-color) calc(l + var(--h) * 1.5) c h);",
  },
};
