import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".input-field-wrapper": {
    "@apply relative flex flex-col cursor-text text-(--fg-color)": {},
  },
  ".input-field": {
    "@apply focus:outline-none p-2": {},
  },
  ".input-field-label": {
    "@apply text-sm": {},
  },
  ".input-field-error": {
    "@apply text-sm": {},
  },
  ".input-field-container": {
    "@apply flex items-center rounded-inputs border focus-within:outline-2 border-(--fg-color) outline-(--fg-color) bg-(--bg-color)/50":
      {},
  },
};
