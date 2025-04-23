import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ResponsiveSizes } from "@/types";
import { NavbarRadius } from "./NavbarTypes";

export function useNavbarStyles({
  fixed,
  position,
  glass,
  hasBorder,
  hasShadow,
  radius,
  collapseAt,
  isOpen,
  className,
  backdropClasses,
}: {
  fixed: boolean;
  position: "top" | "bottom";
  glass: boolean;
  hasBorder: boolean;
  hasShadow: boolean;
  radius?: NavbarRadius;
  isOpen: boolean;
  collapseAt: ResponsiveSizes;
  className?: string;
  backdropClasses?: string;
}) {
  const theme = useTheme();
  const resolvedRadius = radius || theme?.containersRadius || "none";

  return {
    navbarStyles: twMerge(
      "navbar",
      glass && "glass",
      fixed && "fixed left-0 z-40",
      position === "top" && "top-0",
      position === "bottom" && "bottom-0",
      hasBorder && position === "top" && "border-b-2",
      hasBorder && position === "bottom" && "border-t-2",
      resolvedRadius === "small" && position === "top" && "rounded-b",
      resolvedRadius === "small" && position === "bottom" && "rounded-t",
      resolvedRadius === "big" && position === "top" && "rounded-b-lg",
      resolvedRadius === "big" && position === "bottom" && "rounded-t-lg",
      hasShadow && "shadow-stone-600 dark:shadow-stone-800",
      hasShadow && position === "top" && "shadow-[0px_4px_8px_-1px]",
      hasShadow && position === "bottom" && "shadow-[0px_-4px_8px_-1px]",
      className,
    ),
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
    hasTransitions && "transition-[max-height]",
    position === "top" && "order-last",
    position === "bottom" && "order-first",
    collapseAt === "sm" && "sm:navbar-collapse-container-extended",
    collapseAt === "md" && "md:navbar-collapse-container-extended",
    collapseAt === "lg" && "lg:navbar-collapse-container-extended",
    collapseAt === "xl" && "xl:navbar-collapse-container-extended",
    !isOpen && "max-h-0 ease-out",
    isOpen && "max-h-screen ease-in",
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
    // rounded && "rounded-lg",
    className,
  );
  return {
    wrapperStyles,
    listStyles,
  };
}

export function useNavbarLinkStyles({
  collapseAt,
  selectedUnderline,
  selectedUnderlineOffset,
  className,
}: {
  collapseAt: ResponsiveSizes;
  selectedUnderline: boolean;
  selectedUnderlineOffset: boolean;
  className?: string;
}) {
  return twMerge(
    "navbar-link",
    collapseAt === "sm" && "sm:navbar-link-extended",
    collapseAt === "md" && "md:navbar-link-extended",
    collapseAt === "lg" && "lg:navbar-link-extended",
    collapseAt === "xl" && "xl:navbar-link-extended",
    className,
    selectedUnderlineOffset && "selected:underline-offset-1",
    selectedUnderline && "selected:underline",
  );
}
