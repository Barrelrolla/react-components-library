import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".footer-container": {
    "@apply w-full bg-(--bg-color) text-(--fg-color) px-4 py-2": {},
  },
  ".footer": {
    "@apply flex flex-wrap items-start justify-between gap-8 mx-auto w-full max-w-(--max-width) bg-(--bg-color) text-(--fg-color)":
      {},
  },
  ".footer-brand": {
    "@apply flex items-center gap-2 text-2xl font-semibold h-full": {},
  },
  ".footer-links-section": {
    "@apply flex flex-wrap justify-center gap-x-24 gap-y-8 space-y-8": {},
  },
  ".footer-link-group": {
    "@apply flex flex-col": {},
  },
  ".footer-links-title": {
    "@apply font-semibold": {},
  },
  ".footer-full-section": {
    "@apply w-full text-center": {},
  },
};
