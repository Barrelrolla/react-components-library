import { CssInJs } from "@/types";

export default <Record<string, CssInJs>>{
  ".hamburger": {
    "@apply relative h-4.5 w-6 p-4": {},
  },
  ".hamburger-line": {
    "@apply group-hover/hamburger:bg-hover group-focus-visible/hamburger:bg-hover group-active/hamburger:bg-active absolute top-1.75 left-1 h-0.25 w-6 rotate-0 bg-(--bg-color) transition-all duration-(--dropdown-animation-duration)":
      {},
  },
};
