import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".badge": {
    "@apply text-sm py-0.5 px-3 rounded-(--radius-infos) font-[calc(var(--default-font-weight)+200)]":
      {},
  },
  ".badge-solid": {
    "@apply bg-(--bg-color) text-sm py-0.5 px-3 text-(--fg-color) rounded-(--radius-infos)":
      {},
  },
  ".badge-outline": {
    "@apply text-sm py-0.5 px-3 text-(--bg-color) border-(--bg-color) border rounded-(--radius-infos) font-[calc(var(--default-font-weight)+200)]":
      {},
  },
  ".badge-soft": {
    "@apply muted-bg text-sm py-0.5 px-3 text-(--bg-color) border-(--bg-color)/15 border rounded-(--radius-infos) font-[calc(var(--default-font-weight)+200)]":
      {},
  },
};
