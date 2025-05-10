import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ResponsiveSizes } from "@/types";

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
  const theme = useTheme();
  return {
    headerStyles: twMerge(
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
      (!theme || theme.transitions) && "transition-colors",
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

export function useNavbarCollapseStyles({
  position,
  collapseAt,
  isOpen,
  transitions,
  wrapperClasses,
  className,
}: {
  position: "top" | "bottom";
  collapseAt: ResponsiveSizes;
  isOpen: boolean;
  transitions: boolean;
  wrapperClasses?: string;
  className?: string;
}) {
  const theme = useTheme();
  const hasTransitions = (!theme || theme.transitions) && transitions;
  const wrapperStyles = twMerge(
    "navbar-collapse-container",
    hasTransitions && "transition-[max-height] duration-300",
    position === "top" && "order-last",
    position === "bottom" && "order-first",
    collapseAt === "sm" && "sm:navbar-collapse-container-extended",
    collapseAt === "md" && "md:navbar-collapse-container-extended",
    collapseAt === "lg" && "lg:navbar-collapse-container-extended",
    collapseAt === "xl" && "xl:navbar-collapse-container-extended",
    !isOpen && "max-h-0 ease-out",
    isOpen && "hide-scroll max-h-screen overflow-auto ease-in",
    wrapperClasses,
  );

  const listStyles = twMerge(
    "navbar-collapse-list",
    position === "top" && "mt-4",
    position === "bottom" && "mb-4",
    collapseAt === "sm" && "sm:navbar-collapse-list-extended",
    collapseAt === "md" && "md:navbar-collapse-list-extended",
    collapseAt === "lg" && "lg:navbar-collapse-list-extended",
    collapseAt === "xl" && "xl:navbar-collapse-list-extended",
    className,
  );
  return {
    wrapperStyles,
    listStyles,
  };
}

export function useNavbarLinkStyles({
  collapseAt,
  className,
}: {
  collapseAt: ResponsiveSizes;
  className?: string;
}) {
  return twMerge(
    collapseAt === "sm" && "max-sm:navbar-link sm:navbar-link-extended",
    collapseAt === "md" && "max-md:navbar-link md:navbar-link-extended",
    collapseAt === "lg" && "max-lg:navbar-link lg:navbar-link-extended",
    collapseAt === "xl" && "max-xl:navbar-link xl:navbar-link-extended",
    className,
  );
}
