import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ColorType } from "@/types";
import { NavbarContext } from "./NavbarContext";
import { ColorMap } from "@/util/colors";
import { ResponsiveSizes } from "@/util/sizes";

interface NavbarProps extends ComponentProps<"nav"> {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  disableShadow?: boolean;
  disableBorder?: boolean;
  disableRadius?: boolean;
  collapseAt?: ResponsiveSizes;
  fixed?: boolean;
  position?: "top" | "bottom";
}
export function Navbar({
  primaryColor = "white",
  secondaryColor = "black",
  disableBorder = false,
  disableShadow = false,
  disableRadius = false,
  collapseAt = "sm",
  fixed = true,
  position = "top",
  children,
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = twMerge(
    "flex w-full flex-wrap items-center justify-between p-2",
    `bg-${ColorMap[primaryColor].lightShade}`,
    `dark:bg-${ColorMap[secondaryColor].darkShade}`,
    `text-${ColorMap[secondaryColor].darkShade}`,
    `dark:text-${ColorMap[primaryColor].lightShade}`,
    fixed && "fixed left-0 z-40",
    position === "top" && "top-0",
    position === "bottom" && "bottom-0",
    !disableBorder && position === "top" && "border-b-2",
    !disableBorder && position === "bottom" && "border-t-2",
    !disableRadius && position === "top" && "rounded-b-lg",
    !disableRadius && position === "bottom" && "rounded-t-lg",
    !disableShadow && "shadow-stone-600 dark:shadow-stone-800",
    !disableShadow && position === "top" && "shadow-[0px_4px_8px_-1px]",
    !disableShadow && position === "bottom" && "shadow-[0px_-4px_8px_-1px]",
    className,
  );
  return (
    <NavbarContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        position,
        rounded: !disableRadius,
        collapseAt: collapseAt,
        isOpen,
        setIsOpen,
      }}
    >
      <nav className={navClasses}>{children}</nav>
    </NavbarContext.Provider>
  );
}
