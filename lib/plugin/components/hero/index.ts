import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hero": {
    "@apply flex h-[100vh] flex-col justify-evenly": {},
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
