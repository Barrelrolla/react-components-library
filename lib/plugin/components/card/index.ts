import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".card-container": {
    "@apply @container overflow-auto border-containers rounded-containers": {},
  },
  ".card": {
    "@apply flex justify-evenly": {},
  },
  ".card-resizable": {
    "@apply resize min-w-60 max-w-120 min-h-40 max-h-120": {},
  },
  ".card-image": {
    "@apply w-full h-full rounded-containers object-cover": {},
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
    "@apply h-full w-full overflow-hidden px-4 py-2 rounded-containers": {},
  },
};
