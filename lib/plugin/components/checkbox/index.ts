import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".checkbox": {
    "@apply pointer-events-none absolute h-(--size) w-(--size) text-(--fg-color) -outline-offset-1 rounded-sm transition-all":
      {},
  },
  ".checkbox-checked": {
    "@apply opacity-0 peer-checked:opacity-100 disabled:peer-checked:opacity-50":
      {},
  },
  ".checkbox-label": {
    "@apply ml-(--size) peer-focus-visible:outline-none": {},
  },
  ".checkbox-wrapper": {
    "@apply inline-flex items-center gap-1 cursor-pointer select-none": {},
  },
  ".checkbox-highlights": {
    "@apply peer-hover:fg-hover peer-active:fg-active peer-focus-visible:outline-2":
      {},
  },
};
