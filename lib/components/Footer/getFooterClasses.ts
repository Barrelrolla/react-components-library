import { twMerge } from "tailwind-merge";
import { FooterContextType, useFooterContext } from "./FooterContext";

function getErrorMessage(componentName: string) {
  return `Please use the ${componentName} only inside a Footer component!`;
}
export function getFooterClasses({
  decorations,
  containerClassName,
  className,
}: {
  decorations: boolean;
  containerClassName?: string;
  className?: string;
}) {
  return {
    containerClasses: twMerge(
      "footer-container",
      decorations && "navigation-decoration-top",
      containerClassName,
    ),
    classes: twMerge("footer", className),
  };
}

export function getFooterBrandClasses({
  className,
  footerContext,
}: {
  className?: string;
  footerContext: FooterContextType;
}) {
  if (!footerContext) {
    throw new Error(getErrorMessage("Footer brand"));
  }

  const { responsiveAt } = footerContext;

  return {
    classes: twMerge(
      "footer-brand",
      responsiveAt === "sm" && "sm:w-auto",
      responsiveAt === "md" && "md:w-auto",
      responsiveAt === "lg" && "lg:w-auto",
      responsiveAt === "xl" && "xl:w-auto",
      className,
    ),
    resolvedColor: footerContext.color,
  };
}

export function useFooterDivider() {
  const context = useFooterContext();
  if (!context) {
    throw new Error(getErrorMessage("Footer divider"));
  }
  return { resolvedColor: context.color };
}

export function getFooterLinksSectionClasses({
  className,
  footerContext,
}: {
  className?: string;
  footerContext: FooterContextType;
}) {
  if (!footerContext) {
    throw new Error(getErrorMessage("Footer links section"));
  }

  const { responsiveAt } = footerContext;

  return {
    classes: twMerge(
      "footer-links-section",
      responsiveAt === "sm" && "sm:w-auto",
      responsiveAt === "md" && "md:w-auto",
      responsiveAt === "lg" && "lg:w-auto",
      responsiveAt === "xl" && "xl:w-auto",
      className,
    ),
  };
}

export function getFooterLinkGroupClasses({
  className,
}: {
  className?: string;
}) {
  return { classes: twMerge("footer-link-group", className) };
}

export function getFooterLinksTitleClasses({
  className,
}: {
  className?: string;
}) {
  return { classes: twMerge("footer-links-title", className) };
}

export function getFooterLinkClasses({
  className,
  footerContext,
}: {
  className?: string;
  footerContext: FooterContextType;
}) {
  if (!footerContext) {
    throw new Error(getErrorMessage("Footer link"));
  }

  return {
    classes: twMerge("footer-link", className),
    color: footerContext.color,
  };
}

export function getFooterFullSectionClasses({
  className,
  footerContext,
}: {
  className?: string;
  footerContext: FooterContextType;
}) {
  if (!footerContext) {
    throw new Error(getErrorMessage("Footer full section"));
  }

  const { responsiveAt } = footerContext;

  return {
    classes: twMerge(
      "footer-full-section",
      responsiveAt === "sm" && "sm:flex-row",
      responsiveAt === "md" && "md:flex-row",
      responsiveAt === "lg" && "lg:flex-row",
      responsiveAt === "xl" && "xl:flex-row",
      className,
    ),
  };
}

export function getFooterIconsContainerClasses({
  className,
}: {
  className?: string;
}) {
  return { styles: twMerge("footer-icons-container", className) };
}
