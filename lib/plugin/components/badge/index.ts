import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".badge": {
    "@apply muted-bg text-sm py-0.5 px-3 text-(--fg-color) border-(--fg-color)/15 border rounded-(--radius-infos) font-[calc(var(--default-font-weight)+200)]":
      {},
  },
};
