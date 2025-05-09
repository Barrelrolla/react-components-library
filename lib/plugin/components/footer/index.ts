import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".footer-container": {
    "@apply w-full bg-(--bg-color) text-(--fg-color) px-4 py-2": {},
  },
  ".footer": {
    "@apply mx-auto w-full max-w-(--max-width) bg-(--bg-color) text-(--fg-color)":
      {},
  },
};
