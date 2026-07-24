import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown": {
    "@apply text-(--fg-color) bg-(--bg-color) border-containers p-2 rounded-containers":
      {},
  },
  ".dropdown-mobile": {
    "@apply fixed bottom-0 left-0 w-full border-l-0 border-r-0 border-b-0 ": {},
  },
  ".dropdown-title": {
    "@apply text-sm mb-4": {},
  },
  ".dropdown-list": {
    "@apply flex flex-col gap-4 md:block": {},
  },
  ".dropdown-link": {
    "@apply flex hover:bg-(--fg-color)/5 focus-visible:bg-(--fg-color)/5 active:bg-(--fg-color)/10 selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-(--fg-color)/40 selected:focus-visible:bg-(--fg-color)/90 selected:active:bg-(--fg-color)/80 px-2 py-1":
      {},
  },
};
