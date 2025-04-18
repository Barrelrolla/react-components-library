import { useTheme } from "@/contexts";
import { cn } from "@/util";

export function useAnchorStyles(
  highlights: boolean,
  underlined: boolean,
  hoverUnderlineOffset: boolean,
  hoverUnderline: boolean,
  transitions: boolean,
  className?: string,
) {
  const theme = useTheme();

  return cn(
    "text-(--fg-color) outline-(--fg-color)",
    highlights &&
      "hover:fgHover focus-visible:fgHover active:fgActive rounded outline-offset-4 focus-visible:outline-2",
    underlined && "underline",
    !hoverUnderlineOffset && "underline-offset-2",
    hoverUnderlineOffset && "underline-offset-3 hover:underline-offset-2",
    !underlined && hoverUnderline && "hover:underline",
    theme?.transitions && transitions && "transition-basic",
    className,
  );
}
