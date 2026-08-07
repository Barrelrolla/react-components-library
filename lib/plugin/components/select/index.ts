import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".select": {
    "@apply flex justify-between items-center text-main-content border-inputs rounded-inputs px-3 py-2 text-base text-left w-60 hover:bg-(--bg-color)/10 active:bg-(--bg-color)/15 focus-visible:outline-none focus-visible:ring-1 focus:ring-1 ring-(--bg-color) outline-offset-1 error:outline-1 error:outline-error error:border-error disabled:border-none disabled:cursor-not-allowed disabled:muted-bg disabled:opacity-50 disabled:select-none focus:border-(--bg-color)":
      {},
  },
  ".select-wrapper": {
    "@apply focus-within:text-(--bg-color) has-error:text-error": {},
  },
  ".select-label": {
    "@apply text-sm": {},
  },
  ".select-error": {
    "@apply text-sm text-error": {},
  },
  ".select-content": {
    "@apply text-main-content bg-main border-inputs rounded-inputs text-sm": {},
  },
  ".select-option": {
    "@apply flex w-full items-center gap-2 bg-main text-main-content hover:bg-(--fg-color)/15 focus-visible:bg-(--fg-color)/15 active:bg-(--fg-color)/20 selected:bg-(--fg-color)/15 selected:hover:text-(--fg-color) selected:text-(--fg-color) selected:hover:bg-(--fg-color)/20 selected:focus-visible:bg-(--fg-color)/20 p-3 sm:p-1 disabled:pointer-events-none disabled:text-main-content/50 rounded-inputs":
      {},
  },
};
