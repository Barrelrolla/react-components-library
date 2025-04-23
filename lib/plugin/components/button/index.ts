import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".btn": {
    "@apply flex items-center justify-center gap-2 outline-(--bg-color) focus-visible:outline-2 outline-offset-2 cursor-pointer disabled:pointer-events-none disabled:contrast-75 disabled:saturate-50 disabled:opacity-70 select-none antialiased font-semibold":
      {},
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
    "@apply focus:bg-(--bg-color) focus:text-(--fg-color) focus:inset-ring-transparent focus:active:bg-hover":
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
    "@apply focus:bg-(--bg-color) focus:text-(--fg-color)": {},
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
    "@apply focus:text-(--fg-color)": {},
  },
  ".btn-grouped": {
    "@apply inset-ring-0": {},
  },
  ".btn-xs": {
    paddingInline: "0.3rem;",
    paddingBlock: "0.1rem;",
    fontSize: "calc(var(--text-xs) + 0.05rem);",
  },
  ".btn-sm": {
    paddingInline: "0.75rem;",
    paddingBlock: "0.25rem;",
    fontSize: "calc(var(--text-xs) + 0.125rem);",
  },
  ".btn-md": {
    paddingInline: "1.5rem;",
    paddingBlock: "0.5rem;",
    fontSize: "calc(var(--text-xs) + 0.25rem);",
  },
  ".btn-lg": {
    paddingInline: "2.25rem;",
    paddingBlock: "0.75rem;",
    fontSize: "calc(var(--text-xs) + 0.375rem);",
  },
  ".btn-xl": {
    paddingInline: "3rem;",
    paddingBlock: "1rem;",
    fontSize: "calc(var(--text-xs) + 0.5rem);",
  },
  ".btn-icon-xs": {
    padding: "0.225rem;",
    fontSize: "calc(var(--text-xs) + 0.2rem);",
  },
  ".btn-icon-sm": {
    padding: "0.28rem;",
    fontSize: "calc(var(--text-xs) + 0.5rem);",
  },
  ".btn-icon-md": {
    padding: "0.375rem;",
    fontSize: "calc(var(--text-xs) + 1rem);",
  },
  ".btn-icon-lg": {
    padding: "0.4675rem;",
    fontSize: "calc(var(--text-xs) + 1.5rem);",
  },
  ".btn-icon-xl": {
    padding: "0.5625rem;",
    fontSize: "calc(var(--text-xs) + 2rem);",
  },
  ".btn-group": {
    "@apply flex items-center justify-center": {},
  },
};
