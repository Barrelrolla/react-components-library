import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".footer-container": {
    "@apply w-full bg-(--bg-color) text-(--fg-color)": {},
  },
  ".footer": {
    "@apply flex flex-wrap items-start justify-between gap-x-8 gap-y-4 mx-auto w-full max-w-(--max-width) bg-(--bg-color) text-(--fg-color) px-4 pt-2 pb-8":
      {},
  },
  ".footer-brand": {
    "@apply flex items-center gap-2 justify-center w-full font-[calc(var(--default-font-weight)+100)] text-2xl h-full":
      {},
  },
  ".footer-links-section": {
    "@apply flex flex-wrap justify-center w-full gap-x-24 gap-y-4 space-y-8":
      {},
  },
  ".footer-link-group": {
    "@apply flex flex-col": {},
    "margin-block-end": "0px",
  },
  ".footer-link": {
    "margin-block-end": "0px",
  },
  ".footer-links-title": {
    "@apply font-[calc(var(--default-font-weight)+200)]": {},
  },
  ".footer-full-section": {
    "@apply flex w-full flex-col gap-4 items-center justify-between": {},
  },
  ".footer-icons-container": {
    "@apply flex gap-4 text-xl": {},
  },
};
