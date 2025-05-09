import { twMerge } from "tailwind-merge";

export function getFooterStyles({
  containerClasses,
  className,
}: {
  containerClasses?: string;
  className?: string;
}) {
  return {
    containerStyles: twMerge("footer-container", containerClasses),
    styles: twMerge("footer", className),
  };
}
