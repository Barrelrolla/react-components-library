import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".input-field-wrapper": {
    "@apply relative cursor-text w-60": {},
  },
  ".input-field": {
    "@apply text-main-content focus:outline-none w-full py-2 px-3 disabled:cursor-not-allowed disabled:select-none rounded-inputs disabled:opacity-70 no-spinners resize-none text-base":
      {},
  },
  ".input-field-label": {
    "@apply text-sm focus-within:text-(--bg-color) has-error:text-error": {},
  },
  ".input-field-error": {
    "@apply text-sm text-error": {},
  },
  ".input-field-container": {
    "@apply inline-flex items-center rounded-inputs border-inputs outline-offset-1 has-disabled:border-none focus-within:ring-1 ring-(--bg-color) focus-within:border-(--bg-color) has-disabled:muted-bg has-error:ring-error has-error:border-error outline-error has-disabled:opacity-50 has-error:outline-1 w-full":
      {},
  },
  ".input-start-icon": {
    "@apply pointer-events-none absolute start-0 ps-2": {},
  },
  ".input-end-icon": {
    "@apply pointer-events-none absolute end-0 pe-2": {},
  },
};
