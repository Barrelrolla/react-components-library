import { twMerge } from "tailwind-merge";
import { HeroContextType } from "./HeroContext";
import { ResponsiveSizes } from "@/types";

function getErrorMessage(componentName: string) {
  return `Please use the ${componentName} only inside a Hero component!`;
}
export function getHeroClasses({
  responsiveAt,
  wrapperClassName,
  className,
}: {
  responsiveAt?: ResponsiveSizes;
  wrapperClassName?: string;
  className?: string;
}) {
  return {
    classes: twMerge(
      "hero",
      responsiveAt === "sm" && "sm:flex-row",
      responsiveAt === "md" && "md:flex-row",
      responsiveAt === "lg" && "lg:flex-row",
      responsiveAt === "xl" && "xl:flex-row",
      className,
    ),
    wrapperClasses: twMerge("hero-wrapper", wrapperClassName),
  };
}

export function getHeroSectionClasses({
  className,
  heroContext,
}: {
  className?: string;
  heroContext: HeroContextType;
}) {
  if (!heroContext) {
    throw new Error(getErrorMessage("Hero section"));
  }
  const { textAlign, responsiveAt } = heroContext;

  return {
    classes: twMerge(
      "hero-section",
      textAlign === "left" && "text-start",
      textAlign === "center" && "text-center",
      textAlign === "responsive" && "text-center",
      textAlign === "responsive" && responsiveAt === "sm" && "sm:text-left",
      textAlign === "responsive" && responsiveAt === "md" && "md:text-left",
      textAlign === "responsive" && responsiveAt === "lg" && "lg:text-left",
      textAlign === "responsive" && responsiveAt === "xl" && "xl:text-left",
      className,
    ),
  };
}

export function getHeroImageSectionClasses({
  className,
  heroContext,
}: {
  className?: string;
  heroContext: HeroContextType;
}) {
  if (!heroContext) {
    throw new Error(getErrorMessage("Hero image section"));
  }
  const { textAlign, responsiveAt } = heroContext;

  return {
    classes: twMerge(
      "hero-image-section",
      textAlign === "left" && "text-start",
      textAlign === "center" && "text-center",
      textAlign === "responsive" && "text-center",
      textAlign === "responsive" && responsiveAt === "sm" && "sm:text-left",
      textAlign === "responsive" && responsiveAt === "md" && "md:text-left",
      textAlign === "responsive" && responsiveAt === "lg" && "lg:text-left",
      textAlign === "responsive" && responsiveAt === "xl" && "xl:text-left",
      className,
    ),
  };
}

export function getHeroTitleClasses({ className }: { className?: string }) {
  return { classes: twMerge("hero-title", className) };
}

export function getHeroTextClasses({ className }: { className?: string }) {
  return { classes: twMerge("hero-text", className) };
}

export function getHeroActionsClasses({
  className,
  heroContext,
}: {
  className?: string;
  heroContext: HeroContextType;
}) {
  if (!heroContext) {
    throw new Error(getErrorMessage("Hero actions"));
  }
  const { actionsAlign, responsiveAt } = heroContext;

  return {
    classes: twMerge(
      "hero-actions",
      actionsAlign === "left" && "justify-start",
      actionsAlign === "center" && "justify-center",
      actionsAlign === "responsive" && "justify-center",
      actionsAlign === "responsive" &&
        responsiveAt === "sm" &&
        "sm:justify-start",
      actionsAlign === "responsive" &&
        responsiveAt === "md" &&
        "md:justify-start",
      actionsAlign === "responsive" &&
        responsiveAt === "lg" &&
        "lg:justify-start",
      actionsAlign === "responsive" &&
        responsiveAt === "xl" &&
        "xl:justify-start",
      className,
    ),
  };
}
