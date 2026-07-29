import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".sidemenu-wrapper": {
    "@apply bg-(--bg-color) text-(--fg-color) border rounded-containers border-(--fg-color)":
      {},
  },
  ".sidemenu": {
    "@apply max-w-[100vw] max-h-[calc(100vh-2rem)] scrollbar-none sm:overflow-y-auto overflow-x-scroll sm:overflow-x-auto flex flex-row sm:flex-col gap-2":
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
