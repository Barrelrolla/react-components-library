import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hero": {
    "@apply flex flex-col h-screen items-center justify-evenly gap-2 max-w-(--max-width)":
      {},
  },
  ".hero-section": {
    "@apply flex flex-col justify-center h-full w-full overflow-hidden gap-4":
      {},
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
    "@apply h-full w-full object-cover": {},
  },
};
