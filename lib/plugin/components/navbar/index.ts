import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".navbar": {
    "@apply flex w-full bg-main text-main-content transition-colors duration-(--dropdown-animation-duration) left-0 z-(--z-navbar)":
      {},
  },
  ".navbar-backdrop": {
    "@apply fixed bg-zinc-800/30 top-0 left-0 h-screen w-screen z-90": {},
  },
  ".navbar-nav": {
    "@apply relative px-4 py-2 mx-auto flex flex-wrap items-center justify-between z-(--z-navbar)":
      {},
    width: "100%",
    "max-width": "var(--max-width)",
  },
  ".navbar-brand": {
    "@apply flex items-center gap-2 text-2xl font-[calc(var(--default-font-weight)+100)]":
      {},
  },
  ".navbar-collapse-container": {
    "@apply w-full overflow-hidden overflow-x-visible overscroll-contain transition-dropdown":
      {},
  },
  ".navbar-collapse-container-extended": {
    "@apply flex gap-2 order-none max-h-fit w-auto overflow-visible": {},
  },
  ".navbar-collapse-list": {
    "@apply flex flex-col px-1 py-2 gap-1": {},
  },
  ".navbar-collapse-list-extended": {
    "@apply mt-0 mb-0 flex-row items-center gap-4 p-0": {},
  },
  ".navbar-link": {
    "@apply flex bg-main text-main-content hover:bg-(--fg-color)/10 focus-visible:bg-(--fg-color)/10 active:bg-(--fg-color)/30 selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-(--fg-color)/90 selected:focus-visible:bg-(--fg-color)/90 selected:active:bg-(--fg-color)/80 outline-offset-1 p-3":
      {},
  },
  ".navbar-link-extended": {
    "@apply text-main-content selected:text-(--fg-color) selected:hover:fg-hover selected:active:fg-active hover:underline selected:underline underline-offset-4 hover:underline-offset-2 selected:underline-offset-1":
      {},
  },
};
