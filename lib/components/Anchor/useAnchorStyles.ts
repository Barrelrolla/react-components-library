import { twMerge } from "tailwind-merge";
import { ColorType } from "@/types";

export function useAnchorStyles({
  underlined,
  hoverUnderline,
  hoverUnderlineOffset,
  color,
  className,
}: {
  underlined: boolean;
  hoverUnderline: boolean;
  hoverUnderlineOffset: boolean;
  color?: ColorType;
  className?: string;
}) {
  return {
    styles: twMerge(
      "link",
      underlined && "underline",
      !underlined && hoverUnderline && "hover:underline",
      !hoverUnderlineOffset && "underline-offset-1",
      hoverUnderlineOffset && "underline-offset-2 hover:underline-offset-1",
      className,
    ),
    resolvedColor: color || "primary",
  };
}
