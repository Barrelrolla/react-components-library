import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".sidemenu-wrapper": {
    "@apply bg-main text-main-content border rounded-containers border-main-content/(--border-transparency)":
      {},
  },
  ".sidemenu": {
    "@apply max-w-[100vw] max-h-[calc(100vh-2rem)] scrollbar-none sm:overflow-y-auto overflow-x-scroll sm:overflow-x-auto flex flex-row sm:flex-col gap-2":
      {},
  },
  ".sidemenu-item": {
    "@apply selected:focus-visible:outline-(--bg-color) selected:bg-(--bg-color)/5 selected:text-(--bg-color) selected:hover:bg-(--bg-color)/10 selected:focus-visible:bg-(--bg-color)/10 selected:active:bg-(--bg-color)/15 w-max shrink-0 justify-start text-start -outline-offset-4 focus-visible:outline-2 sm:h-14 sm:w-full":
      {},
  },
  ".sidemenu-vertical-mask": {
    maskImage:
      "linear-gradient(to bottom,var(--start-fade) 0%,black 20%,black 80%,var(--end-fade) 100%)",
  },
  ".sidemenu-horizontal-mask": {
    maskImage:
      "linear-gradient(to right,var(--start-fade) 0%,black 20%,black 80%,var(--end-fade) 100%)",
  },
};
