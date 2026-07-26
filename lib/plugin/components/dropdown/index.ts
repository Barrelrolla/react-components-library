import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown": {
    "@apply text-(--fg-color) bg-(--bg-color) border-containers p-2 rounded-containers z-(--z-floats) focus-visible:outline-none":
      {},
  },
  ".dropdown-mobile-bottom": {
    "@apply fixed bottom-0 left-0 w-full border-l-0 border-r-0 border-b-0 mb-2":
      {},
  },
  ".dropdown-mobile-top": {
    "@apply fixed top-0 left-0 w-full border-l-0 border-r-0 border-t-0 mt-2":
      {},
  },
  ".dropdown-mobile-left": {
    "@apply fixed top-0 left-0 h-full border-l-0 border-t-0 border-b-0": {},
  },
  ".dropdown-mobile-right": {
    "@apply fixed top-0 right-0 h-full border-r-0 border-t-0 border-b-0": {},
  },
  ".dropdown-title": {
    "@apply text-sm p-2 sm:p-1": {},
  },
  ".dropdown-list": {
    "@apply flex flex-col gap-1 sm:block": {},
  },
  ".dropdown-link": {
    "@apply flex w-full not-disabled:hover:bg-(--fg-color)/5 not-disabled:focus-visible:bg-(--fg-color)/5 not-disabled:active:bg-(--fg-color)/10 selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-(--fg-color)/40 selected:focus-visible:bg-(--fg-color)/90 selected:active:bg-(--fg-color)/80 p-3 sm:p-1 disabled:text-(--fg-color)/50 hover:disabled:text-(--fg-color)/50 disabled:cursor-not-allowed":
      {},
  },
};
