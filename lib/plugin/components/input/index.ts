import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".input-field-wrapper": {
    "@apply relative flex flex-col cursor-text text-(--fg-color) ": {},
  },
  ".input-field": {
    "@apply focus:outline-none w-full py-1 px-2 disabled:cursor-not-allowed disabled:muted-bg rounded-inputs disabled:opacity-70":
      {},
  },
  ".input-field-label": {
    "@apply text-sm": {},
  },
  ".input-field-error": {
    "@apply text-sm": {},
  },
  ".input-field-container": {
    "@apply flex items-center rounded-inputs border-inputs has-error:outline-1 outline-offset-1 has-disabled:border-none focus-within:ring-1":
      {},
  },
  ".input-start-icon": {
    "@apply pointer-events-none absolute start-0 ps-2": {},
  },
  ".input-end-icon": {
    "@apply pointer-events-none absolute end-0 pe-2": {},
  },
};
