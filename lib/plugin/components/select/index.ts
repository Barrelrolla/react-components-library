import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".select": {
    "@apply hover:highlighted-main-bg has-disabled:muted-main-bg has-error:border-error outline-error has-error:outline-1 has-error:ring-transparent ring-inputs has-error:focus-within:ring-error inline-flex w-full items-center border border-transparent px-3 py-1.5 outline-offset-1 focus-within:border focus-within:border-(--bg-color) focus-within:ring-(--bg-color) focus-visible:outline-none has-disabled:opacity-50 has-disabled:ring-0 gap-1 flex-wrap cursor-pointer  has-disabled:select-none has-disabled:pointer-events-none":
      {},
  },
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
