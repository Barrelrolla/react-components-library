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
};
