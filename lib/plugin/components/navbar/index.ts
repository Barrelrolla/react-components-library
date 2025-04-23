import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".navbar": {
    "@apply flex w-full flex-wrap items-center justify-between px-4 py-2 bg-(--bg-color) text-(--fg-color)":
      {},
  },
  ".navbar-brand": {
    "@apply flex items-center gap-2 text-2xl font-bold": {},
  },
  ".navbar-collapse-container": {
    "@apply w-full overflow-auto overscroll-contain": {},
  },
  ".navbar-collapse-container-extended": {
    "@apply order-none max-h-fit w-auto overflow-visible": {},
  },
  ".navbar-collapse-list": {
    "@apply flex flex-col gap-2 p-2": {},
  },
  ".navbar-collapse-list-extended": {
    "@apply mt-0 mb-0 flex-row items-center gap-4 p-0": {},
  },
  ".navbar-link": {
    "@apply flex justify-start p-2 outline-offset-0 selected:bg-(--fg-color) selected:text-(--bg-color) hover:bg-hover focus-visible:bg-hover selected:hover:bg-hover-inverse selected:focus-visible:bg-hover-inverse selected:focus-visible:text-(--bg-color) selected:hover:text-(--bg-color) selected:active:bg-active-inverse selected:active:text-(--bg-color)":
      {},
  },
  ".navbar-link-extended": {
    "@apply px-2 py-0 hover:bg-transparent focus-visible:bg-transparent selected:bg-transparent selected:text-(--fg-color) selected:hover:bg-transparent selected:hover:text-(--fg-color) active:bg-transparent":
      {},
  },
};
