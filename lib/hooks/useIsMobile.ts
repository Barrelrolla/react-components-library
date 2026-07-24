import { useMediaQuery } from "./useMediaQuery";

export default function useIsMobile() {
  return useMediaQuery("(width <= 600px)");
}
