import { twMerge } from "tailwind-merge";
import { ResponsiveSizes } from "@/types";
import { NavbarContextType } from "./NavbarContext";

function getErrorMessage(componentName: string) {
  return `Please use the ${componentName} only inside a Navbar component!`;
}

export function getNavbarClasses({
  fixed,
  position,
  glass: isGlass,
  hasShadow,
  collapseAt,
  isOpen,
  className,
  backdropClassName,
}: {
  fixed: boolean;
  position: "top" | "bottom";
  glass: boolean;
  hasShadow: boolean;
  isOpen: boolean;
  collapseAt: ResponsiveSizes;
  className?: string;
  backdropClassName?: string;
}) {
  return {
    classes: twMerge(
      "navbar",
      isGlass && "glass",
      isGlass && isOpen && collapseAt == "sm" && "not-sm:bg-main/80",
      isGlass && isOpen && collapseAt == "md" && "not-md:bg-main/80",
      isGlass && isOpen && collapseAt == "lg" && "not-lg:bg-main/80",
      isGlass && isOpen && collapseAt == "xl" && "not-xl:bg-main/80",
      fixed && "fixed",
      !fixed && "absolute",
      position === "top" && "navigation-decoration-bottom top-0",
      position === "bottom" && "navigation-decoration-top bottom-0",
      hasShadow && "shadow-dark/60 dark:shadow-dark/80",
      hasShadow && position === "top" && "shadow-[0px_4px_8px_-1px]",
      hasShadow && position === "bottom" && "shadow-[0px_-4px_8px_-1px]",
      className,
    ),
    navClasses: twMerge("navbar-nav"),
    backdropClasses: twMerge(
      "navbar-backdrop",
      collapseAt === "sm" && "sm:hidden",
      collapseAt === "md" && "md:hidden",
      collapseAt === "lg" && "lg:hidden",
      collapseAt === "xl" && "xl:hidden",
      !isOpen && "hidden",
      isOpen && "block",
      backdropClassName,
    ),
  };
}

export function getNavbarBrandClasses({ className }: { className?: string }) {
  return {
    classes: twMerge("navbar-brand", className),
  };
}

export function getNavbarCollapseClasses({
  className,
  navbarContext,
}: {
  className?: string;
  navbarContext: NavbarContextType;
}) {
  if (!navbarContext) {
    throw new Error(getErrorMessage("Navbar collapse"));
  }

  const { position, isOpen, collapseAt } = navbarContext;

  return {
    classes: twMerge(
      "navbar-collapse-container",
      position === "top" && "order-last",
      position === "bottom" && "order-first",
      collapseAt === "sm" &&
        "sm:navbar-collapse-container-extended max-sm:scrollbar-stable-gutter",
      collapseAt === "md" &&
        "md:navbar-collapse-container-extended max-md:scrollbar-stable-gutter",
      collapseAt === "lg" &&
        "lg:navbar-collapse-container-extended max-lg:scrollbar-stable-gutter",
      collapseAt === "xl" &&
        "xl:navbar-collapse-container-extended max-xl:scrollbar-stable-gutter",
      isOpen && collapseAt === "sm" && "max-sm:hide-scroll",
      isOpen && collapseAt === "md" && "max-md:hide-scroll",
      isOpen && collapseAt === "lg" && "max-lg:hide-scroll",
      isOpen && collapseAt === "xl" && "max-xl:hide-scroll",
      !isOpen && "max-h-0 ease-out",
      isOpen && "max-h-[calc(100vh-5rem)] overflow-auto ease-in",
      className,
    ),
  };
}

export function getNavbarMenuClasses({
  className,
  navbarContext,
}: {
  className?: string;
  navbarContext: NavbarContextType;
}) {
  if (!navbarContext) {
    throw new Error(getErrorMessage("Navbar collapse"));
  }

  const { position, collapseAt } = navbarContext;

  return {
    classes: twMerge(
      "navbar-collapse-list",
      position === "top" && "mt-4",
      position === "bottom" && "mb-4",
      collapseAt === "sm" && "sm:navbar-collapse-list-extended",
      collapseAt === "md" && "md:navbar-collapse-list-extended",
      collapseAt === "lg" && "lg:navbar-collapse-list-extended",
      collapseAt === "xl" && "xl:navbar-collapse-list-extended",
      className,
    ),
  };
}

export function getNavbarLinkClasses({
  className,
  navbarContext,
}: {
  className?: string;
  navbarContext: NavbarContextType;
}) {
  if (!navbarContext) {
    throw new Error(getErrorMessage("Navbar link"));
  }

  const { collapseAt } = navbarContext;
  return {
    classes: twMerge(
      collapseAt === "sm" && "max-sm:navbar-link sm:navbar-link-extended",
      collapseAt === "md" && "max-md:navbar-link md:navbar-link-extended",
      collapseAt === "lg" && "max-lg:navbar-link lg:navbar-link-extended",
      collapseAt === "xl" && "max-xl:navbar-link xl:navbar-link-extended",
      className,
    ),
  };
}

export function getNavbarToggleClasses({
  wrapperClassName,
  navbarContext,
}: {
  wrapperClassName?: string;
  navbarContext: NavbarContextType;
}) {
  if (!navbarContext) {
    throw new Error(getErrorMessage("Navbar toggle"));
  }

  const { collapseAt } = navbarContext;

  return {
    classes: twMerge(
      collapseAt === "sm" && "sm:hidden",
      collapseAt === "md" && "md:hidden",
      collapseAt === "lg" && "lg:hidden",
      collapseAt === "xl" && "xl:hidden",
      wrapperClassName,
    ),
  };
}
