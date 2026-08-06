import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".tooltip": {
    "@apply text-(--fg-color) bg-(--bg-color) ring ring-(--fg-color)/(--border-transparency) px-2.5 py-0.5 text-sm rounded-inputs":
      {},
  },
};
