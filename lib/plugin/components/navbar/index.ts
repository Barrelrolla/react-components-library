import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".navbar": {
    "@apply w-full bg-(--bg-color) text-(--fg-color) transition-colors duration-(--dropdown-animation-duration)":
      {},
  },
  ".navbar-nav": {
    "@apply relative px-4 py-2 mx-auto flex flex-wrap items-center justify-between z-40":
      {},
    width: "100%",
    "max-width": "var(--max-width)",
  },
  ".navbar-brand": {
    "@apply flex items-center gap-2 text-2xl font-[calc(var(--default-font-weight)+100)]":
      {},
  },
  ".navbar-collapse-container": {
    "@apply w-full overflow-hidden overscroll-contain transition-dropdown": {},
  },
  ".navbar-collapse-container-extended": {
    "@apply order-none max-h-fit w-auto overflow-visible": {},
  },
  ".navbar-collapse-list": {
    "@apply flex flex-col gap-2": {},
  },
  ".navbar-collapse-list-extended": {
    "@apply mt-0 mb-0 flex-row items-center gap-4 p-0": {},
  },
  ".navbar-link": {
    "@apply flex hover:bg-(--fg-color)/10 focus-visible:bg-(--fg-color)/10 active:bg-(--fg-color)/30 selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-(--fg-color)/90 selected:focus-visible:bg-(--fg-color)/90 selected:active:bg-(--fg-color)/80  outline-offset-1 p-2":
      {},
  },
  ".navbar-link-extended": {
    "@apply hover:underline selected:underline underline-offset-4 hover:underline-offset-2 selected:underline-offset-1":
      {},
  },
};
