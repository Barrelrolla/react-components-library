import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hero": {
    "@apply flex h-[90vh] w-[100svw] flex-col justify-between gap-6": {},
  },
  ".hero-section": {
    "@apply flex flex-col h-full w-full box-border justify-center gap-4": {},
  },
  ".hero-actions": {
    "@apply flex flex-wrap gap-8": {},
  },
  ".hero-image": {
    "@apply flex h-full object-cover": {},
  },
};
