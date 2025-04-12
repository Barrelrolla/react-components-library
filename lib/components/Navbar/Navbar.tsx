import { ComponentProps, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavbarContext } from "./NavbarContext";
import { ColorType } from "@/types";
import { ResponsiveSizes } from "@/util/sizes";
import { ColorMap } from "@/util/colors";

export type NavbarProps = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  disableShadow?: boolean;
  disableBorder?: boolean;
  disableRadius?: boolean;
  collapseAt?: ResponsiveSizes;
  fixed?: boolean;
  position?: "top" | "bottom";
  backdropClasses?: string;
} & ComponentProps<"nav">;

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
  backdropClasses,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = twMerge(
    "flex w-full flex-wrap items-center justify-between px-4 py-2",
    `bg-${ColorMap[primaryColor].light} dark:bg-${ColorMap[secondaryColor].dark} text-${ColorMap[secondaryColor].dark} dark:text-${ColorMap[primaryColor].light}`,
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
  const backdropClassesToApply = twMerge(
    "fixed top-0 left-0 z-30 h-screen w-screen",
    collapseAt === "sm" && "sm:hidden",
    collapseAt === "md" && "md:hidden",
    collapseAt === "lg" && "lg:hidden",
    collapseAt === "xl" && "xl:hidden",
    !isOpen && "hidden",
    isOpen && "block",
    backdropClasses,
  );

  function outsideClickHandler() {
    setIsOpen(false);
  }

  function keyupHandler(event: KeyboardEvent) {
    if (event.code === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", keyupHandler);
    return document.removeEventListener("keyup", keyupHandler);
  }, []);

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
      <>
        <nav className={navClasses}>{children}</nav>
        <div
          className={backdropClassesToApply}
          onClick={outsideClickHandler}
        ></div>
      </>
    </NavbarContext.Provider>
  );
}
