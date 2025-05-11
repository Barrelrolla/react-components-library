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

export function useFooterBrandStyles({ className }: { className?: string }) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(
      "Please use the Footer brand only inside a Footer component!",
    );
  }

  const { responsiveAt } = context;

  return {
    classes: twMerge(
      "footer-brand",
      responsiveAt === "sm" && "sm:w-auto",
      responsiveAt === "md" && "md:w-auto",
      responsiveAt === "lg" && "lg:w-auto",
      responsiveAt === "xl" && "xl:w-auto",
      className,
    ),
    color: context.color,
  };
}

export function useFooterLInksSectionStyles({
  className,
}: {
  className?: string;
}) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(
      "Please use the Footer brand only inside a Footer component!",
    );
  }

  const { responsiveAt } = context;

  return {
    styles: twMerge(
      "footer-links-section",
      responsiveAt === "sm" && "sm:w-auto",
      responsiveAt === "md" && "md:w-auto",
      responsiveAt === "lg" && "lg:w-auto",
      responsiveAt === "xl" && "xl:w-auto",
      className,
    ),
  };
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

export function useFooterFullSectionStyles({
  className,
}: {
  className?: string;
}) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(
      "Please use the Footer Links only inside a Footer component!",
    );
  }

  const { responsiveAt } = context;

  return {
    styles: twMerge(
      "footer-full-section",
      responsiveAt === "sm" && "sm:flex-row",
      responsiveAt === "md" && "md:flex-row",
      responsiveAt === "lg" && "lg:flex-row",
      responsiveAt === "xl" && "xl:flex-row",
      className,
    ),
  };
}

export function getFooterIconsContainerStyles({
  className,
}: {
  className?: string;
}) {
  return { styles: twMerge("footer-icons-container", className) };
}
