import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".checkbox": {
    "@apply pointer-events-none absolute h-(--size) w-(--size) text-(--fg-color) peer-hover:fg-hover peer-active:fg-active peer-focus-visible:outline-2 -outline-offset-1 rounded-sm transition-all":
      {},
  },
  ".checkbox-wrapper": {
    "@apply inline-flex items-center gap-2 cursor-pointer select-none": {},
  },
};
