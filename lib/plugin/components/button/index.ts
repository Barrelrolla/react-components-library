import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".btn": {
    "@apply flex items-center justify-center gap-2 outline-(--bg-color) focus-visible:outline-2 outline-offset-2 cursor-pointer disabled:pointer-events-none disabled:contrast-75 disabled:saturate-50 disabled:opacity-70 select-none antialiased":
      {},
  },
  ".btn-solid": {
    "@apply bg-(--bg-color) hover:bg-hover focus-visible:bg-hover active:bg-active text-(--fg-color)":
      {},
  },
  ".btn-outline": {
    "@apply inset-ring text-(--bg-color) hover:inset-ring-transparent focus-visible:inset-ring-transparent hover:bg-(--bg-color) focus-visible:bg-(--bg-color) focus-visible:text-(--fg-color) hover:text-(--fg-color) active:bg-hover active:text-(--fg-color) active:inset-ring-transparent":
      {},
  },
  ".btn-ghost": {
    "@apply text-(--bg-color)": {},
  },
  ".btn-ghost-none": {
    "@apply hover:ghost-hover focus-visible:ghost-hover active:ghost-active":
      {},
  },
  ".btn-ghost-fill": {
    "@apply hover:bg-(--bg-color) focus-visible:bg-(--bg-color) hover:text-(--fg-color) focus-visible:text-(--fg-color) active:bg-hover active:text-(--fg-color)":
      {},
  },
  ".btn-ghost-outline": {
    "@apply hover:inset-ring hover:ghost-hover focus-visible:ghost-hover active:inset-ring active:ghost-active":
      {},
  },
  ".btn-ghost-contrasting": {
    "@apply hover:text-(--fg-color) focus-visible:text-(--fg-color) active:fg-active outline-(--fg-color)":
      {},
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
};
