import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hero": {
    "@apply flex h-screen flex-col justify-self-center justify-evenly max-w-(--max-width)":
      {},
  },
  ".hero-section": {
    "@apply flex flex-col h-full w-full box-border justify-center overflow-hidden gap-4":
      {},
  },
  ".hero-actions": {
    "@apply flex flex-wrap px-6 gap-8": {},
  },
  ".hero-image": {
    "@apply h-full object-cover": {},
  },
};
