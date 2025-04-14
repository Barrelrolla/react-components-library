import { ComponentProps, useEffect, useState } from "react";
import { NavbarContextProvider } from "./NavbarContext";
import { useNavbarStyles } from "./useNavbarStyles";
import { ColorType, ResponsiveSizes } from "@/types";

export type NavbarProps = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  hasShadow?: boolean;
  hasBorder?: boolean;
  isRounded?: boolean;
  collapseAt?: ResponsiveSizes;
  fixed?: boolean;
  position?: "top" | "bottom";
  backdropClasses?: string;
} & ComponentProps<"nav">;

export function Navbar({
  primaryColor,
  secondaryColor,
  hasBorder = true,
  hasShadow = true,
  isRounded = true,
  collapseAt = "sm",
  fixed = true,
  position = "top",
  children,
  className,
  backdropClasses,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    navbarStyles,
    backdropStyles,
    resolvedPrimaryColor,
    resolvedSecondaryColor,
  } = useNavbarStyles(
    fixed,
    position,
    hasBorder,
    hasShadow,
    isRounded,
    isOpen,
    collapseAt,
    primaryColor,
    secondaryColor,
    className,
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

  function scrollHandler() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("keyup", keyupHandler);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("keyup", keyupHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <NavbarContextProvider
      value={{
        primaryColor: resolvedPrimaryColor,
        secondaryColor: resolvedSecondaryColor,
        position,
        rounded: isRounded,
        collapseAt: collapseAt,
        isOpen,
        setIsOpen,
      }}
    >
      <>
        <nav className={navbarStyles}>{children}</nav>
        <div className={backdropStyles} onClick={outsideClickHandler}></div>
      </>
    </NavbarContextProvider>
  );
}
