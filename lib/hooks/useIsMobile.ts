import { useMediaQuery } from "./useMediaQuery";

export function useIsMobile() {
  return useMediaQuery("(width < 640px)");
}
