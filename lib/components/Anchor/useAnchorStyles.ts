import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType } from "@/types";

export function useAnchorStyles({
  highlights,
  underlined,
  hoverUnderline,
  hoverUnderlineOffset,
  transitions,
  color,
  className,
}: {
  highlights: boolean;
  underlined: boolean;
  hoverUnderline: boolean;
  hoverUnderlineOffset: boolean;
  transitions: boolean;
  color?: ColorType;
  className?: string;
}) {
  const theme = useTheme();

  return {
    classes: twMerge(
      "a",
      highlights && "a-highlights",
      underlined && "underline",
      !underlined && hoverUnderline && "hover:underline",
      !hoverUnderlineOffset && "underline-offset-1",
      hoverUnderlineOffset && "underline-offset-2 hover:underline-offset-1",
      (!theme || theme.transitions) && transitions && "transition-anchor",
      className,
    ),
    resolvedColor: color || "primary",
  };
}
