import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType, ResponsiveSizes } from "@/types";
import { ColorMap } from "@/util";

interface NavbarStyles {
  navbarStyles: string;
  backdropStyles: string;
  resolvedPrimaryColor: ColorType;
  resolvedSecondaryColor: ColorType;
}

export function useNavbarStyles(
  fixed: boolean,
  position: "top" | "bottom",
  hasBorder: boolean,
  hasShadow: boolean,
  isRounded: boolean,
  isOpen: boolean,
  collapseAt: ResponsiveSizes,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
  className?: string,
  backdropClasses?: string,
): NavbarStyles {
  const theme = useTheme();
  const resolvedPrimaryColor = primaryColor || theme?.primaryColor || "black";
  const resolvedSecondaryColor =
    secondaryColor || theme?.secondaryColor || "white";
  const primary = ColorMap[resolvedPrimaryColor];
  const secondary = ColorMap[resolvedSecondaryColor];
  return {
    navbarStyles: twMerge(
      "flex w-full flex-wrap items-center justify-between px-4 py-2",
      `bg-${secondary.light} text-${primary.dark} dark:bg-${primary.dark} dark:text-${secondary.light}`,
      fixed && "fixed left-0 z-40",
      position === "top" && "top-0",
      position === "bottom" && "bottom-0",
      hasBorder && position === "top" && "border-b-2",
      hasBorder && position === "bottom" && "border-t-2",
      isRounded && position === "top" && "rounded-b-lg",
      isRounded && position === "bottom" && "rounded-t-lg",
      hasShadow && "shadow-stone-600 dark:shadow-stone-800",
      hasShadow && position === "top" && "shadow-[0px_4px_8px_-1px]",
      hasShadow && position === "bottom" && "shadow-[0px_-4px_8px_-1px]",
      className,
    ),
    backdropStyles: twMerge(
      "fixed top-0 left-0 z-30 h-screen w-screen",
      collapseAt === "sm" && "sm:hidden",
      collapseAt === "md" && "md:hidden",
      collapseAt === "lg" && "lg:hidden",
      collapseAt === "xl" && "xl:hidden",
      !isOpen && "hidden",
      isOpen && "block",
      backdropClasses,
    ),
    resolvedPrimaryColor,
    resolvedSecondaryColor,
  };
}

export function useNavbarCollapseStyles(
  position: "top" | "bottom",
  collapseAt: ResponsiveSizes,
  isOpen: boolean,
  rounded: boolean,
  wrapperClasses?: string,
  className?: string,
) {
  const theme = useTheme();
  const transitions = !theme || theme.transitions;
  const wrapperStyles = twMerge(
    "w-full overflow-auto overscroll-contain",
    transitions && "transition-[max-height]",
    position === "top" && "order-last",
    position === "bottom" && "order-first",
    collapseAt === "sm" &&
      "sm:order-none sm:max-h-fit sm:w-auto sm:overflow-visible",
    collapseAt === "md" &&
      "md:order-none md:max-h-fit md:w-auto md:overflow-visible",
    collapseAt === "lg" &&
      "lg:order-none lg:max-h-fit lg:w-auto lg:overflow-visible",
    collapseAt === "xl" &&
      "xl:order-none xl:max-h-fit xl:w-auto xl:overflow-visible",
    !isOpen && "max-h-0 ease-out",
    isOpen && "max-h-screen ease-in",
    wrapperClasses,
  );

  const listStyles = twMerge(
    "flex flex-col gap-2 p-2",
    position === "top" && "mt-4",
    position === "bottom" && "mb-4",
    collapseAt === "sm" &&
      "sm:mt-0 sm:mb-0 sm:flex-row sm:items-center sm:gap-4 sm:p-0",
    collapseAt === "md" &&
      "md:mt-0 md:mb-0 md:flex-row md:items-center md:gap-4 md:p-0",
    collapseAt === "lg" &&
      "lg:mt-0 lg:mb-0 lg:flex-row lg:items-center lg:gap-4 lg:p-0",
    collapseAt === "xl" &&
      "xl:mt-0 xl:mb-0 xl:flex-row xl:items-center xl:gap-4 xl:p-0",
    rounded && "rounded-lg",
    className,
  );
  return {
    wrapperStyles,
    listStyles,
  };
}

export function useNavbarLinkStyles(
  primaryColor: ColorType,
  secondaryColor: ColorType,
  selected: boolean,
  bgHighlight: boolean,
  selectedHighlight: boolean,
  collapseAt: ResponsiveSizes,
  selectedUnderline: boolean,
  selectedUnderlineOffset: boolean,
  className?: string,
  selectedClasses?: string,
) {
  const theme = useTheme();
  const transitions =
    (!theme || theme.transitions) && (bgHighlight || selectedHighlight);
  const primary = ColorMap[primaryColor];
  const secondary = ColorMap[secondaryColor];

  const highLightedColors = bgHighlight
    ? `hover:bg-${secondary.lightHighlight} active:bg-${secondary.lightActive} dark:hover:bg-${primary.darkHighlight} dark:active:bg-${primary.darkActive}`
    : "";

  const selectedColors = selected
    ? `outline-offset-1 bg-${primary.dark} dark:bg-${secondary.light} hover:bg-${primary.darkHighlight} dark:hover:bg-${secondary.lightHighlight} focus-visible:bg-${primary.darkHighlight} dark:focus-visible:bg-${secondary.lightHighlight} active:bg-${primary.darkActive} dark:active:bg-${secondary.lightActive} text-${secondary.light} dark:text-${primary.dark} hover:text-${secondary.lightHighlight} dark:hover:text-${primary.darkHighlight} focus-visible:text-${secondary.lightHighlight} dark:focus-visible:text-${primary.darkHighlight} active:text-${secondary.lightActive} dark:active:text-${primary.darkActive} focus-visible:outline-${primary.darkHighlight} dark:focus-visible:outline-${secondary.lightHighlight}`
    : "";

  return twMerge(
    "flex justify-start p-2 outline-offset-0",
    highLightedColors,
    selectedColors,
    transitions && "transition-colors",
    collapseAt === "sm" && "sm:px-2 sm:py-0",
    collapseAt === "md" && "md:px-2 md:py-0",
    collapseAt === "lg" && "lg:px-2 lg:py-0",
    collapseAt === "xl" && "xl:px-2 xl:py-0",
    className,
    selectedUnderlineOffset && selected && "underline-offset-1",
    selectedUnderline && selected && "underline",
    selectedClasses,
  );
}
