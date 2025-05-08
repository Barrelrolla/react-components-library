import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hero-wrapper": {
    "@apply w-screen justify-center overflow-hidden flex": {},
  },
  ".hero": {
    "@apply flex flex-col h-1 min-h-(--hero-height) w-full items-center overflow-x-visible justify-between gap-2 max-w-(--max-width)":
      {},
  },
  ".hero-section": {
    "@apply flex flex-col justify-center h-full w-full gap-4": {},
  },
  ".hero-image-section": {
    "@apply h-full w-full overflow-visible gap-4": {},
  },
  ".hero-title": {
    "@apply px-6 text-5xl": {},
  },
  ".hero-text": {
    "@apply px-6": {},
  },
  ".hero-actions": {
    "@apply flex flex-wrap px-6 gap-8": {},
  },
  ".hero-image": {
    "@apply h-full w-full object-cover max-w-screen": {},
  },
};
