import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".dialog": {
    "@apply mx-auto max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-y-auto bg-transparent":
      {},
  },
  ".dialog-backdrop": {
    "@apply bg-dark/30 h-full w-full flex items-center justify-center overflow-y-auto p-4 mx-auto z-1000 backdrop-blur-xs":
      {},
  },
};
