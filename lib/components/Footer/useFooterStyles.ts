import { twMerge } from "tailwind-merge";
import { useFooterContext } from "./FooterContext";

function getErrorMessage(componentName: string) {
  return `Please use the ${componentName} only inside a Footer component!`;
}
export function useFooterStyles({
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
    throw new Error(getErrorMessage("Footer brand"));
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
    resolvedColor: context.color,
  };
}

export function useFooterLinksSectionStyles({
  className,
}: {
  className?: string;
}) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(getErrorMessage("Footer links section"));
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

export function useFooterLinkGroupStyles({
  className,
}: {
  className?: string;
}) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(getErrorMessage("Footer link group"));
  }

  return { styles: twMerge("footer-link-group", className) };
}

export function useFooterLinksTitleStyles({
  className,
}: {
  className?: string;
}) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(getErrorMessage("Footer links title"));
  }

  return { styles: twMerge("footer-links-title", className) };
}

export function useFooterLinkStyles({ className }: { className?: string }) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(getErrorMessage("Footer link"));
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
    throw new Error(getErrorMessage("Footer full section"));
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

export function useFooterIconsContainerStyles({
  className,
}: {
  className?: string;
}) {
  const context = useFooterContext();
  if (!context) {
    throw new Error(getErrorMessage("Footer icons container"));
  }

  return { styles: twMerge("footer-icons-container", className) };
}
