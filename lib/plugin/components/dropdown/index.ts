import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown": {
    "@apply text-(--fg-color) bg-(--bg-color) border-containers p-2 rounded-containers z-(--z-floats) focus-visible:outline-none":
      {},
  },
  ".dropdown-mobile": {
    "@apply fixed bottom-0 left-0 w-full border-l-0 border-r-0 border-b-0 ": {},
  },
  ".dropdown-title": {
    "@apply text-sm px-3 py-2 sm:p-1": {},
  },
  ".dropdown-list": {
    "@apply flex flex-col gap-1 sm:block": {},
  },
  ".dropdown-link": {
    "@apply flex w-full hover:bg-(--fg-color)/5 focus-visible:bg-(--fg-color)/5 active:bg-(--fg-color)/10 selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-(--fg-color)/40 selected:focus-visible:bg-(--fg-color)/90 selected:active:bg-(--fg-color)/80 py-5 px-4 sm:p-2":
      {},
  },
};
