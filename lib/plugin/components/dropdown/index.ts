import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown": {
    "@apply text-(--fg-color) bg-(--bg-color) p-2 border-(--fg-color)/(--border-transparency) focus-visible:outline-none":
      {},
  },
  ".dropdown-border": {
    "@apply border-containers rounded-containers": {},
  },
  ".dropdown-mobile-bottom": {
    "@apply fixed bottom-0 left-0 w-full border-t-(length:--border-containers) rounded-t-(--radius-containers) pb-8":
      {},
  },
  ".dropdown-mobile-top": {
    "@apply fixed top-0 left-0 w-full border-b-(length:--border-containers) rounded-b-(--radius-containers)":
      {},
  },
  ".dropdown-mobile-left": {
    "@apply fixed top-0 left-0 h-full border-r-(length:--border-containers) rounded-r-(--radius-containers)":
      {},
  },
  ".dropdown-mobile-right": {
    "@apply fixed top-0 right-0 h-full border-l-(length:--border-containers) rounded-l-(--radius-containers)":
      {},
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
