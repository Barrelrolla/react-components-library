import { twMerge } from "tailwind-merge";

export function getFooterStyles({
  decorations,
  containerClasses,
  className,
}: {
  decorations: boolean;
  containerClasses?: string;
  className?: string;
}) {
  return {
    containerStyles: twMerge(
      "footer-container",
      decorations && "navigation-decoration-top",
      containerClasses,
    ),
    styles: twMerge("footer", className),
  };
}
