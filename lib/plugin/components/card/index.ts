import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".card-container": {
    "@apply @container overflow-hidden border-containers rounded-containers":
      {},
  },
  ".card": {
    "@apply flex justify-evenly": {},
  },
  ".card-resizable": {
    "@apply resize min-w-60 max-w-120 min-h-40 max-h-120": {},
  },
  ".card-interact": {
    "@apply hover:bg-light/40 dark:hover:bg-dark/20 rounded-containers focus-visible:outline-main-content focus-visible:bg-light/40 active:bg-light/50 dark:focus-visible:bg-dark/20 dark:active:bg-dark/30 -outline-offset-4 focus-visible:outline-2 transition-colors z-10":
      {},
  },
  ".card-image": {
    "@apply relative group-hover:scale-110 transition-transform group-focus-visible:scale-110 w-full h-full object-cover focus-visible:scale-110 group-focus-visible:-z-10":
      {},
  },
  ".card-section": {
    "@apply flex-1": {},
  },
  ".card-title": {
    "@apply text-xl font-normal px-4 py-2": {},
  },
  ".card-text": {
    "@apply px-4 py-2": {},
  },
  ".card-actions": {
    "@apply place-self-end px-4 py-2": {},
  },
  ".card-image-container": {
    "@apply h-full overflow-hidden": {},
  },
  ".card-image-container-padded": {
    "@apply mx-4 my-2 border-containers rounded-containers": {},
  },
};
