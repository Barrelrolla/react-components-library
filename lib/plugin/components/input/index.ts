import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".input-field-wrapper": {
    "@apply relative cursor-text w-60": {},
  },
  ".input-field": {
    "@apply text-main-content focus:outline-none w-full py-1.5 px-3 disabled:cursor-not-allowed disabled:select-none rounded-inputs disabled:opacity-70 no-spinners resize-none text-base":
      {},
  },
  ".input-field-label": {
    "@apply text-sm focus-within:text-(--bg-color) has-error:text-error": {},
  },
  ".input-field-error": {
    "@apply text-sm text-error": {},
  },
  ".input-field-container": {
    "@apply hover:highlighted-main-bg inline-flex items-center outline-offset-1 has-disabled:ring-0 focus-within:border-(--bg-color) has-disabled:muted-main-bg has-error:border-error outline-error has-disabled:opacity-50 has-error:outline-1 w-full has-error:ring-transparent ring-inputs border border-transparent focus-within:border focus-within:ring-(--bg-color) has-error:focus-within:ring-error":
      {},
  },
  ".input-start-icon": {
    "@apply pointer-events-none absolute start-0 ps-2": {},
  },
  ".input-end-icon": {
    "@apply pointer-events-none absolute end-0 pe-2": {},
  },
};
