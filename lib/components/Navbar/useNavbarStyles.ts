import { twMerge } from "tailwind-merge";
import { ResponsiveSizes } from "@/types";
import { useNavbarContext } from "./NavbarContext";

function getErrorMessage(componentName: string) {
  return `Please use the ${componentName} only inside a Navbar component!`;
}

export function useNavbarStyles({
  fixed,
  position,
  glass,
  hasShadow,
  collapseAt,
  isOpen,
  className,
  backdropClasses,
}: {
  fixed: boolean;
  position: "top" | "bottom";
  glass: boolean;
  hasShadow: boolean;
  isOpen: boolean;
  collapseAt: ResponsiveSizes;
  className?: string;
  backdropClasses?: string;
}) {
  return {
    styles: twMerge(
      "navbar",
      glass && "glass",
      isOpen && collapseAt == "sm" && "not-sm:bg-(--bg-color)/80",
      isOpen && collapseAt == "md" && "not-md:bg-(--bg-color)/80",
      isOpen && collapseAt == "lg" && "not-lg:bg-(--bg-color)/80",
      isOpen && collapseAt == "xl" && "not-xl:bg-(--bg-color)/80",
      fixed && "fixed left-0",
      position === "top" && "navigation-decoration-bottom top-0",
      position === "bottom" && "navigation-decoration-top bottom-0",
      hasShadow && "shadow-dark/60 dark:shadow-dark/80",
      hasShadow && position === "top" && "shadow-[0px_4px_8px_-1px]",
      hasShadow && position === "bottom" && "shadow-[0px_-4px_8px_-1px]",
      className,
    ),
    navStyles: twMerge("navbar-nav"),
    backdropStyles: twMerge(
      "backdrop",
      collapseAt === "sm" && "sm:hidden",
      collapseAt === "md" && "md:hidden",
      collapseAt === "lg" && "lg:hidden",
      collapseAt === "xl" && "xl:hidden",
      !isOpen && "hidden",
      isOpen && "block",
      backdropClasses,
    ),
  };
}

export function useNavbarBrandStyles({ className }: { className?: string }) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(getErrorMessage("Navbar brand"));
  }

  return {
    styles: twMerge("navbar-brand", className),
    resolvedColor: context.color,
  };
}

export function useNavbarCollapseStyles({
  wrapperClasses,
  className,
}: {
  wrapperClasses?: string;
  className?: string;
}) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(getErrorMessage("Navbar collapse"));
  }

  const { position, isOpen, collapseAt } = context;

  return {
    wrapperStyles: twMerge(
      "navbar-collapse-container",
      position === "top" && "order-last",
      position === "bottom" && "order-first",
      collapseAt === "sm" && "sm:navbar-collapse-container-extended",
      collapseAt === "md" && "md:navbar-collapse-container-extended",
      collapseAt === "lg" && "lg:navbar-collapse-container-extended",
      collapseAt === "xl" && "xl:navbar-collapse-container-extended",
      !isOpen && "max-h-0 ease-out",
      isOpen && "hide-scroll max-h-screen overflow-auto ease-in",
      wrapperClasses,
    ),
    styles: twMerge(
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

export function useNavbarLinkStyles({ className }: { className?: string }) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(getErrorMessage("Navbar link"));
  }

  const { collapseAt } = context;
  return {
    styles: twMerge(
      collapseAt === "sm" && "max-sm:navbar-link sm:navbar-link-extended",
      collapseAt === "md" && "max-md:navbar-link md:navbar-link-extended",
      collapseAt === "lg" && "max-lg:navbar-link lg:navbar-link-extended",
      collapseAt === "xl" && "max-xl:navbar-link xl:navbar-link-extended",
      className,
    ),
    resolvedColor: context.color,
  };
}

export function useNavbarToggleStyles({
  wrapperClasses,
}: {
  wrapperClasses?: string;
}) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(getErrorMessage("Navbar toggle"));
  }

  const { color, collapseAt } = context;

  return {
    styles: twMerge(
      collapseAt === "sm" && "sm:hidden",
      collapseAt === "md" && "md:hidden",
      collapseAt === "lg" && "lg:hidden",
      collapseAt === "xl" && "xl:hidden",
      wrapperClasses,
    ),
    resolvedColor: color,
  };
}
