import { twMerge } from "tailwind-merge";
import { ColorType } from "@/types";

export function getAnchorClasses({
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
    classes: twMerge(
      "link",
      underlined && "underline",
      !underlined && hoverUnderline && "hover:underline",
      !hoverUnderlineOffset && "underline-offset-1",
      hoverUnderlineOffset && "underline-offset-4 hover:underline-offset-2",
      className,
    ),
    resolvedColor: color || "primary",
  };
}
