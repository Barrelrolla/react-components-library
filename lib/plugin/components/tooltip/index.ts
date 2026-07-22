import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".tooltip": {
    "@apply text-(--fg-color) bg-(--bg-color) border border-(--fg-color)/(--border-transparency) px-3 py-1 rounded-inputs":
      {},
  },
};
