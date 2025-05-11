import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hero-wrapper": {
    "@apply w-full overflow-hidden bg-(--bg-color) text-(--fg-color)": {},
  },
  ".hero": {
    "@apply flex mx-auto flex-col h-(--hero-height) w-full items-center overflow-x-visible justify-between gap-2 max-w-(--max-width)":
      {},
  },
  ".hero-section": {
    "@apply flex flex-col justify-center h-full w-full gap-4": {},
  },
  ".hero-image-section": {
    "@apply h-full w-full overflow-visible gap-4": {},
  },
  ".hero-title": {
    "@apply px-4 font-[calc(var(--default-font-weight)+100)] text-5xl": {},
  },
  ".hero-text": {
    "@apply px-4": {},
  },
  ".hero-actions": {
    "@apply flex flex-wrap px-4 gap-8": {},
  },
  ".hero-image": {
    "@apply h-full w-full object-cover max-w-screen": {},
  },
};
