import { SizeType } from "@/types";

type Size = {
  [key in SizeType]: string;
};

export const ButtonSizes: Size = {
  xs: "px-3 py-1 text-sm",
  sm: "px-4.5 py-1.5 text-base",
  md: "px-6 py-2 text-lg",
  lg: "px-9 py-3 text-xl",
  xl: "px-12 py-4 text-2xl",
};
