import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".btn": {
    "@apply flex items-center justify-center gap-2 outline-(--bg-color) focus-visible:outline-2 outline-offset-2 cursor-pointer disabled:pointer-events-none disabled:contrast-75 disabled:saturate-50 disabled:opacity-70 select-none antialiased font-[calc(var(--default-font-weight)+200)] transition":
      {},
    "--p": "",
  },
  ".btn-solid": {
    "@apply bg-(--bg-color) hover:bg-hover focus-visible:bg-hover active:bg-active text-(--fg-color) selected:bg-(--fg-color) selected:outline-(--fg-color) selected:text-(--bg-color) selected:hover:bg-hover-inverse selected:focus-visible:bg-hover-inverse":
      {},
  },
  ".btn-outline": {
    "@apply inset-ring text-(--bg-color) hover:inset-ring-transparent focus-visible:inset-ring-transparent hover:bg-(--bg-color) focus-visible:bg-(--bg-color) focus-visible:text-(--fg-color) hover:text-(--fg-color) active:bg-hover active:text-(--fg-color) active:inset-ring-transparent selected:bg-(--bg-color) selected:text-(--fg-color) selected:inset-ring-0 selected:hover:bg-hover":
      {},
  },
  ".btn-outline-focus": {
    "@apply focus:bg-(--bg-color) focus:text-(--fg-color) focus:inset-ring-transparent focus:hover:bg-hover focus:active:bg-active":
      {},
  },
  ".btn-ghost": {
    "@apply text-(--bg-color) hover:bg-(--bg-color)/5 focus-visible:bg-(--bg-color)/5 active:bg-(--bg-color)/10 selected:bg-(--bg-color) selected:text-(--fg-color) selected:hover:bg-hover selected:focus-visible:bg-hover":
      {},
  },
  ".btn-solid-ghost": {
    "@apply text-(--bg-color) hover:bg-(--bg-color) focus-visible:bg-(--bg-color) hover:text-(--fg-color) focus-visible:text-(--fg-color) active:bg-hover active:text-(--fg-color) selected:bg-(--bg-color) selected:text-(--fg-color) selected:hover:bg-hover selected:focus-visible:bg-hover":
      {},
  },
  ".btn-outline-ghost": {
    "@apply text-(--bg-color) hover:inset-ring focus-visible:ghost-hover active:inset-ring active:ghost-hover selected:inset-ring":
      {},
  },
  ".btn-solid-ghost-focus": {
    "@apply focus:bg-(--bg-color) focus:text-(--fg-color) focus:hover:bg-hover focus:active:bg-active":
      {},
  },
  ".btn-outline-ghost-focus": {
    "@apply focus:inset-ring": {},
  },
  ".btn-grouped": {
    "@apply inset-ring-0": {},
  },
  ".btn-xs": {
    "@apply px-3 h-7.5 text-xs": {},
  },
  ".btn-sm": {
    "@apply px-4.5 h-8.5 text-sm": {},
  },
  ".btn-md": {
    "@apply px-6 h-10 text-base": {},
  },
  ".btn-lg": {
    "@apply px-7.5 h-12 text-lg": {},
  },
  ".btn-xl": {
    "@apply px-9 h-14.5 text-xl": {},
  },
  ".btn-icon-xs": {
    "@apply size-7.5 text-base": {},
  },
  ".btn-icon-sm": {
    "@apply size-8.5 text-lg": {},
  },
  ".btn-icon-md": {
    "@apply size-10 text-xl": {},
  },
  ".btn-icon-lg": {
    "@apply size-12 text-2xl": {},
  },
  ".btn-icon-xl": {
    "@apply size-14.5 text-3xl": {},
  },
  ".btn-group": {
    "@apply flex items-center justify-center": {},
  },
};
