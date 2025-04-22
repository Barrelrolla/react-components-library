import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".a": {
    "@apply text-(--fg-color) outline-(--fg-color) rounded outline-offset-4 focus-visible:outline-2":
      {},
  },
  ".a-highlights": {
    "@apply hover:fg-hover focus-visible:fg-hover active:fg-active": {},
  },
};
