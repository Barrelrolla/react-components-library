import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown": {
    "@apply text-(--fg-color) bg-(--bg-color) border-containers p-2 rounded-containers":
      {},
  },
  ".dropdown-mobie": {
    "@apply fixed top-0 left-0 w-full": {},
  },
  ".dropdown-title": {
    "@apply text-sm": {},
  },
  ".dropdown-link": {
    "@apply flex hover:bg-(--fg-color)/5 focus-visible:bg-(--fg-color)/5 active:bg-(--fg-color)/10 selected:bg-(--fg-color) selected:text-(--bg-color) selected:hover:bg-(--fg-color)/40 selected:focus-visible:bg-(--fg-color)/90 selected:active:bg-(--fg-color)/80 px-2 py-1":
      {},
  },
};
