import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".select": {
    "@apply text-(--fg-color) bg-(--bg-color) border-inputs rounded-inputs px-2 py-1 text-sm text-left w-47":
      {},
  },
  ".select-content": {
    "@apply text-(--fg-color) bg-(--bg-color) border-containers rounded-containers px-2 py-1 text-sm":
      {},
  },
  ".select-option": {
    "@apply text-(--fg-color) bg-(--bg-color)": {},
  },
};
