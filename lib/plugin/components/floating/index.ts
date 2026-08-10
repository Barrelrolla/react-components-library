import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".floating": {
    "@apply text-main-content bg-main p-2 border-main-content/(--border-transparency) focus-visible:outline-none":
      {},
  },
  ".floating-container": {
    "@apply absolute z-(--z-floats) focus-visible:outline-none": {},
  },

  ".floating-container-inner": {
    "@apply overflow-auto scrollbar-thin scrollbar-thumb-(--color-main-content) scrollbar-track-main relative":
      {},
  },
  ".floating-border": {
    "@apply border-containers rounded-containers": {},
  },
  ".floating-mobile-bottom": {
    "@apply fixed bottom-0 left-0 w-full border-t-(length:--border-containers) rounded-t-(--radius-containers) py-9":
      {},
  },
  ".floating-mobile-top": {
    "@apply fixed top-0 left-0 w-full border-b-(length:--border-containers) rounded-b-(--radius-containers)":
      {},
  },
  ".floating-mobile-left": {
    "@apply fixed top-0 left-0 h-full border-r-(length:--border-containers) rounded-r-(--radius-containers)":
      {},
  },
  ".floating-mobile-right": {
    "@apply fixed top-0 right-0 h-full border-l-(length:--border-containers) rounded-l-(--radius-containers)":
      {},
  },
  ".floating-list-title": {
    "@apply text-sm text-main-content": {},
  },
  ".floating-list-item": {
    "@apply bg-main text-main-content selected:bg-(--fg-color)/15 selected:hover:text-(--fg-color) selected:text-(--fg-color) selected:hover:bg-(--fg-color)/20 selected:focus-visible:bg-(--fg-color)/20 disabled:text-main-content/50 rounded-inputs text-left w-full cursor-pointer items-center justify-between gap-2 p-3 -outline-offset-1 outline-(--fg-color) hover:bg-(--fg-color)/15 focus-visible:bg-(--fg-color)/15 data-active:bg-(--fg-color)/15 focus-visible:outline-1 active:bg-(--fg-color)/20 disabled:pointer-events-none sm:p-1 line-clamp-1":
      {},
  },
};
