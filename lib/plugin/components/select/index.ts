import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".select": {
    "@apply flex justify-between items-center text-main-content border-inputs rounded-inputs px-2 py-1 text-sm text-left w-46 hover:bg-(--fg-color)/10 active:bg-(--fg-color)/15 focus-visible:outline-none focus-visible:ring-1 focus:ring-1 ring-(--fg-color) outline-offset-1 error:outline-1 error:outline-error error:border-error disabled:border-none disabled:cursor-not-allowed disabled:muted-bg disabled:opacity-70 disabled:select-none focus:border-(--fg-color)":
      {},
  },
  ".select-wrapper": {
    "@apply focus-within:text-(--fg-color) has-error:text-error": {},
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
    "@apply text-sm flex w-full items-center gap-2 bg-main text-main-content hover:bg-(--fg-color)/15 focus-visible:bg-(--fg-color)/15 active:bg-(--fg-color)/20 selected:bg-(--fg-color)/15 selected:hover:text-(--fg-color) selected:text-(--fg-color) selected:hover:bg-(--fg-color)/20 selected:focus-visible:bg-(--fg-color)/20 p-3 sm:p-1 disabled:pointer-events-none disabled:text-main-content/50 rounded-inputs":
      {},
  },
};
