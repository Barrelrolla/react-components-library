import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".tooltip": {
    "@apply text-(--fg-color) bg-(--bg-color) border border-(--fg-color)/(--border-transparency) px-2.5 py-0.5 text-sm rounded-inputs z-(--z-floats)":
      {},
  },
};
