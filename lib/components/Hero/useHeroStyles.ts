import { twMerge } from "tailwind-merge";
import { useHeroContext } from "./HeroContext";
import { ResponsiveSizes } from "@/types";

export function useHeroStyles({
  responsiveAt,
  wrapperClasses,
  className,
}: {
  responsiveAt?: ResponsiveSizes;
  wrapperClasses?: string;
  className?: string;
}) {
  const classes = twMerge(
    "hero",
    responsiveAt === "sm" && "sm:flex-row",
    responsiveAt === "md" && "md:flex-row",
    responsiveAt === "lg" && "lg:flex-row",
    responsiveAt === "xl" && "xl:flex-row",
    className
  );
  const wrapperStyles = twMerge("hero-wrapper", wrapperClasses);
  return { classes, wrapperStyles };
}

export function useHeroSectionStyles({ className }: { className?: string }) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(
      "Please use the Hero Section only inside a Hero component!"
    );
  }
  const { textAlign, responsiveAt } = context;

  const classes = twMerge(
    "hero-section",
    textAlign === "left" && "text-start",
    textAlign === "center" && "text-center",
    textAlign === "responsive" && "text-center",
    textAlign === "responsive" && responsiveAt === "sm" && "sm:text-left",
    textAlign === "responsive" && responsiveAt === "md" && "md:text-left",
    textAlign === "responsive" && responsiveAt === "lg" && "lg:text-left",
    textAlign === "responsive" && responsiveAt === "xl" && "xl:text-left",
    className
  );
  return { classes };
}

export function useHeroImageSectionStyles({
  className,
}: {
  className?: string;
}) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(
      "Please use the Hero Section only inside a Hero component!"
    );
  }
  const { textAlign, responsiveAt } = context;

  const classes = twMerge(
    "hero-image-section",
    textAlign === "left" && "text-start",
    textAlign === "center" && "text-center",
    textAlign === "responsive" && "text-center",
    textAlign === "responsive" && responsiveAt === "sm" && "sm:text-left",
    textAlign === "responsive" && responsiveAt === "md" && "md:text-left",
    textAlign === "responsive" && responsiveAt === "lg" && "lg:text-left",
    textAlign === "responsive" && responsiveAt === "xl" && "xl:text-left",
    className
  );
  return { classes };
}

export function useHeroTitleStyles({ className }: { className?: string }) {
  const classes = twMerge("hero-title", className);
  return { classes };
}

export function useHeroTextStyles({ className }: { className?: string }) {
  const classes = twMerge("hero-text", className);
  return { classes };
}

export function useHeroActionsStyles({ className }: { className?: string }) {
  const context = useHeroContext();
  if (!context) {
    throw new Error(
      "Please use the Hero Actions only inside a Hero component!"
    );
  }
  const { actionsAlign, responsiveAt } = context;
  const classes = twMerge(
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
    className
  );
  return { classes };
}
