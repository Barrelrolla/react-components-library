import { SizeType } from "@/types";

type Size = {
  [key in SizeType]: string;
};
export const ButtonSizes: Size = {
  xs: "px-3 py-1 text-xs",
  sm: "px-4.5 py-1.5 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-9 py-3 text-lg",
  xl: "px-12 py-4 text-xl",
};

export const IconSizes: Size = {
  xs: "size-4",
  sm: "size-5",
  md: "size-6",
  lg: "size-6.5",
  xl: "size-7",
};
