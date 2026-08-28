import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".card-container": {
    "@apply bg-main text-main-content overflow-clip border-containers rounded-containers w-full":
      {},
  },
  ".card": {
    "@apply flex justify-evenly": {},
  },
  ".card-resizable": {
    "@apply resize min-w-60 max-w-120 min-h-40 max-h-120": {},
  },
  ".card-interact": {
    "@apply relative w-full h-full inline-block hover:bg-hover focus-visible:bg-hover active:bg-active rounded-containers -outline-offset-4 focus-visible:outline-2 focus-visible:outline-main-content outline-main-content transition-colors z-10":
      {},
  },
  ".card-image": {
    "@apply relative group-hover/card:scale-110 transition-transform group-focus-visible/card:scale-110 w-full h-full object-cover focus-visible:scale-110 group-focus-visible/card:-z-10":
      {},
  },
  ".card-section": {
    "@apply flex-1": {},
  },
  ".card-title": {
    "@apply text-xl font-[calc(var(--default-font-weight)+200)] px-4 py-2": {},
  },
  ".card-text": {
    "@apply px-4 py-2": {},
  },
  ".card-actions": {
    "@apply place-self-end px-4 py-2": {},
  },
  ".card-image-container": {
    "@apply overflow-hidden": {},
  },
  ".card-image-container-padded": {
    "@apply m-2 h-[calc(100%-16px)] border-containers rounded-containers": {},
  },
};
