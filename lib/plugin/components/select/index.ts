import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".select-wrapper": {
    "@apply focus-within:text-(--bg-color) has-error:text-error w-60": {},
  },
  ".select-label": {
    "@apply text-sm": {},
  },
  ".select-error": {
    "@apply text-sm text-error": {},
  },
};
