import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dropdown-title": {
    "@apply text-sm p-2 sm:p-1": {},
  },
  ".dropdown-list": {
    "@apply flex flex-col gap-1 sm:block": {},
  },
  ".dropdown-link": {
    "@apply flex text-base w-full items-center gap-2 bg-main text-main-content hover:bg-(--bg-color)/15 focus-visible:bg-(--bg-color)/15 active:bg-(--bg-color)/20 expanded:bg-(--bg-color)/15 expanded:hover:text-(--bg-color) expanded:text-(--bg-color) expanded:hover:bg-(--bg-color)/20 expanded:focus-visible:bg-(--bg-color)/20 p-3 sm:p-1 disabled:pointer-events-none disabled:text-main-content/50 rounded-inputs":
      {},
  },
};
