import { twMerge } from "tailwind-merge";
import { useHeroContext } from "./HeroContext";
import { ResponsiveSizes } from "@/types";

function getErrorMessage(componentName: string) {
  return `Please use the ${componentName} only inside a Hero component!`;
}
export function useHeroStyles({
  responsiveAt,
  wrapperClasses,
  className,
}: {
  responsiveAt?: ResponsiveSizes;
  wrapperClasses?: string;
  className?: string;
}) {
  return {
    styles: twMerge(
      "hero",
      responsiveAt === "sm" && "sm:flex-row",
      responsiveAt === "md" && "md:flex-row",
      responsiveAt === "lg" && "lg:flex-row",
      responsiveAt === "xl" && "xl:flex-row",
      className,
    ),
    wrapperStyles: twMerge("hero-wrapper", wrapperClasses),
  };
}

export function useHeroSectionStyles({ className }: { className?: string }) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(getErrorMessage("Hero section"));
  }
  const { textAlign, responsiveAt } = context;

  return {
    styles: twMerge(
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

export function useHeroImageSectionStyles({
  className,
}: {
  className?: string;
}) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(getErrorMessage("Hero image section"));
  }
  const { textAlign, responsiveAt } = context;

  return {
    styles: twMerge(
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

export function useHeroTitleStyles({ className }: { className?: string }) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(getErrorMessage("Hero title"));
  }

  return { styles: twMerge("hero-title", className) };
}

export function useHeroTextStyles({ className }: { className?: string }) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(getErrorMessage("Hero text"));
  }

  return { styles: twMerge("hero-text", className) };
}

export function useHeroActionsStyles({ className }: { className?: string }) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(getErrorMessage("Hero actions"));
  }
  const { actionsAlign, responsiveAt } = context;

  return {
    styles: twMerge(
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
