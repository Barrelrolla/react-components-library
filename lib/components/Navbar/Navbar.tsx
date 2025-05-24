"use client";

import { ComponentProps, useEffect, useState } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps } from "@/util";
import { NavbarContextProvider } from "./NavbarContext";
import { useNavbarStyles } from "./useNavbarStyles";

export type NavbarProps = {
  /** Color of the Navbar and the elements iniside */
  color?: ColorType;
  /** Adds a small shadow underneath for a 3D effect. */
  hasShadow?: boolean;
  /** The size at which the Navbar should switch from a dropdown to a full bar. */
  collapseAt?: ResponsiveSizes;
  /** Prevents the navbar from hiding when scrolling down. Uses `fixed` style, so you should add some margin on the page content. */
  fixed?: boolean;
  /** If the navbar is fixed, you can choose the position to be at the top or bottom of the screen. */
  position?: "top" | "bottom";
  /** Adds a transparent background and a glass effect. */
  glass?: boolean;
  /** There is a backdrop when the dropdown menu is open. If you want to add some classes to it, you can do it here. */
  backdropClasses?: string;
} & ComponentProps<"nav">;

export function Navbar({
  color = "main",
  hasShadow = true,
  collapseAt = "sm",
  fixed = true,
  position = "top",
  glass = true,
  children,
  className,
  backdropClasses,
  ...rest
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { styles, navStyles, backdropStyles } = useNavbarStyles({
    fixed,
    position,
    glass,
    hasShadow,
    isOpen,
    collapseAt,
    className,
    backdropClasses,
  });

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
        color,
        position,
        collapseAt: collapseAt,
        isOpen,
        setIsOpen,
      }}
    >
      <header className={styles} style={cssColorProps(color)}>
        <nav className={navStyles} {...rest}>
          {children}
        </nav>
        <div className={backdropStyles} onClick={outsideClickHandler}></div>
      </header>
    </NavbarContextProvider>
  );
}
