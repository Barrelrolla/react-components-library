import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown": {
    "@apply text-main-content bg-main p-2 border-main-content/(--border-transparency) focus-visible:outline-none":
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
    "@apply flex w-full items-center gap-2 bg-main text-main-content hover:bg-(--bg-color)/15 focus-visible:bg-(--bg-color)/15 active:bg-(--bg-color)/20 expanded:bg-(--bg-color)/15 expanded:hover:text-(--bg-color) expanded:text-(--bg-color) expanded:hover:bg-(--bg-color)/20 expanded:focus-visible:bg-(--bg-color)/20 p-3 sm:p-1 disabled:pointer-events-none disabled:text-main-content/50 rounded-inputs":
      {},
  },
};
