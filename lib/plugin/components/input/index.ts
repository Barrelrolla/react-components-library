import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".input-field-wrapper": {
    "@apply relative cursor-text w-60": {},
  },
  ".input-field": {
    "@apply text-main-content focus:outline-none w-full py-1.5 px-3 disabled:cursor-not-allowed disabled:select-none rounded-inputs disabled:opacity-70 no-spinners resize-none":
      {},
  },
  ".input-field-label": {
    "@apply flex flex-col text-sm focus-within:text-(--bg-color) has-error:text-error":
      {},
  },
  ".input-field-error": {
    "@apply text-sm text-error": {},
  },
  ".input-field-container": {
    "@apply hover:highlighted-main-bg inline-flex items-center outline-offset-1 has-disabled:muted-main-bg outline-error has-disabled:opacity-50 error:outline-1 has-error:outline-1 w-full inset-ring-transparent focus-within:inset-ring-(--bg-color) error:border-error has-error:border-error focus-visible:outline-none":
      {},
  },
  ".input-start-icon": {
    "@apply pointer-events-none absolute start-0 ps-2": {},
  },
  ".input-end-icon": {
    "@apply pointer-events-none absolute end-0 pe-2": {},
  },
  ".input-xs": {
    "@apply min-h-[1.88rem] text-xs": {},
  },
  ".input-sm": {
    "@apply min-h-[2.12rem] text-sm": {},
  },
  ".input-md": {
    "@apply min-h-[2.5rem] text-base": {},
  },
  ".input-lg": {
    "@apply min-h-[3rem] text-lg": {},
  },
  ".input-xl": {
    "@apply min-h-[3.5rem] text-xl": {},
  },
  ".input-solid": {
    "@apply border-inputs border border-(--bg-color) focus-within:inset-ring-1":
      {},
  },
  ".input-outline": {
    "@apply border-(--bg-color) focus-within:inset-ring-1": {},
  },
  ".input-ghost": {
    "@apply border-inputs border-transparent": {},
  },
  ".input-solid-ghost": {
    "@apply border-inputs border-transparent inset-ring-1 focus-within:border-(--bg-color) hover:border-(--bg-color)":
      {},
  },
  ".input-outline-ghost": {
    "@apply border border-transparent inset-ring-1 focus-within:border-(--bg-color) hover:border-(--bg-color)":
      {},
  },
};
