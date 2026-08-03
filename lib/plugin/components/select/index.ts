import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".select": {
    "@apply flex justify-between items-center text-(--fg-color) border-inputs rounded-inputs px-2 py-1 text-sm text-left w-46 hover:muted-bg focus-visible:outline-none focus-visible:ring-1 focus:ring-1 ring-(--fg-color) outline-offset-1 error:outline-1 disabled:border-none disabled:cursor-not-allowed disabled:muted-bg disabled:opacity-70 disabled:select-none":
      {},
  },
  ".select-wrapper": {
    "@apply text-(--fg-color) ": {},
  },
  ".select-label": {
    "@apply text-sm": {},
  },
  ".select-error": {
    "@apply text-sm": {},
  },
  ".select-content": {
    "@apply text-(--fg-color) bg-(--bg-color) border-inputs rounded-inputs text-sm":
      {},
  },
  ".select-option": {
    "@apply flex justify-between items-center text-(--fg-color) bg-(--bg-color) px-0.5 w-full rounded-inputs not-disabled:hover:bg-hover not-disabled:active:bg-active focus-visible:outline-none text-left not-disabled:focus-visible:bg-hover disabled:cursor-not-allowed disabled:opacity-50 disabled:select-none px-2 py-1":
      {},
  },
};
