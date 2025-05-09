import { twMerge } from "tailwind-merge";
import { useFooterContext } from "./FooterContext";

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

export function getFooterBrandStyles({ className }: { className?: string }) {
  return { classes: twMerge("footer-brand", className) };
}

export function getFooterLInksSectionStyles({
  className,
}: {
  className?: string;
}) {
  return { styles: twMerge("footer-links-section", className) };
}

export function getFooterLinkGroupStyles({
  className,
}: {
  className?: string;
}) {
  return { styles: twMerge("footer-link-group", className) };
}

export function getFooterLinksTitleStyles({
  className,
}: {
  className?: string;
}) {
  return { styles: twMerge("footer-links-title", className) };
}

export function useFooterLinkStyles({ className }: { className?: string }) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(
      "Please use the Footer Links only inside a Footer component!",
    );
  }
  return {
    styles: twMerge("footer-link", className),
    color: context.color,
  };
}

export function getFooterFullSectionStyles({
  className,
}: {
  className?: string;
}) {
  return { styles: twMerge("footer-full-section", className) };
}
