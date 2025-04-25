import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".btn": {
    "@apply flex items-center justify-center gap-2 outline-(--bg-color) focus-visible:outline-2 outline-offset-2 cursor-pointer disabled:pointer-events-none disabled:contrast-75 disabled:saturate-50 disabled:opacity-70 select-none antialiased font-semibold":
      {},
    "--p": "",
  },
  ".btn-solid": {
    "@apply bg-(--bg-color) hover:bg-hover focus-visible:bg-hover active:bg-active text-(--fg-color) selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-hover-inverse selected:focus-visible:bg-hover-inverse":
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
    "@apply text-(--bg-color)": {},
  },
  ".btn-ghost-none": {
    "@apply hover:ghost-hover focus-visible:ghost-hover active:ghost-active selected:ghost-active selected:hover:ghost-hover":
      {},
  },
  ".btn-ghost-fill": {
    "@apply hover:bg-(--bg-color) focus-visible:bg-(--bg-color) hover:text-(--fg-color) focus-visible:text-(--fg-color) active:bg-hover active:text-(--fg-color) selected:bg-(--bg-color) selected:text-(--fg-color) selected:hover:bg-hover selected:focus-visible:bg-hover":
      {},
  },
  ".btn-ghost-fill-focus": {
    "@apply focus:bg-(--bg-color) focus:text-(--fg-color) focus:hover:bg-hover focus:active:bg-active":
      {},
  },
  ".btn-ghost-outline": {
    "@apply hover:inset-ring hover:ghost-hover focus-visible:ghost-hover active:inset-ring active:ghost-active selected:inset-ring":
      {},
  },
  ".btn-ghost-outline-focus": {
    "@apply focus:inset-ring": {},
  },
  ".btn-ghost-contrasting": {
    "@apply hover:text-(--fg-color) focus-visible:text-(--fg-color) active:fg-active outline-(--fg-color) selected:text-(--fg-color) selected:hover:fg-hover":
      {},
  },
  ".btn-ghost-contrasting-focus": {
    "@apply focus:text-(--fg-color) focus:hover:fg-hover focus:active:fg-active":
      {},
  },
  ".btn-grouped": {
    "@apply inset-ring-0": {},
  },
  ".btn-xs": {
    "@apply px-3 h-[1.5rem] text-xs": {},
  },
  ".btn-sm": {
    "@apply px-4.5 h-[2rem] text-sm": {},
  },
  ".btn-md": {
    "@apply px-6 h-[2.5rem] text-base": {},
  },
  ".btn-lg": {
    "@apply px-7.5 h-[3rem] text-lg": {},
  },
  ".btn-xl": {
    "@apply px-9 h-[3.5rem] text-xl": {},
  },
  ".btn-icon-xs": {
    "@apply size-[1.5rem] text-base": {},
  },
  ".btn-icon-sm": {
    "@apply size-[2rem] text-lg": {},
  },
  ".btn-icon-md": {
    "@apply size-[2.5rem] text-xl": {},
  },
  ".btn-icon-lg": {
    "@apply size-[3rem] text-2xl": {},
  },
  ".btn-icon-xl": {
    "@apply size-[3.5rem] text-3xl": {},
  },
  ".btn-group": {
    "@apply flex items-center justify-center": {},
  },
};
