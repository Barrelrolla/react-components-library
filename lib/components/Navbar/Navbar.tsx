import { ComponentProps, useEffect, useState } from "react";
import { NavbarContextProvider } from "./NavbarContext";
import { useNavbarStyles } from "./useNavbarStyles";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps } from "@/util/cssColorProps";

export type NavbarProps = {
  color?: ColorType;
  hasShadow?: boolean;
  hasBorder?: boolean;
  isRounded?: boolean;
  collapseAt?: ResponsiveSizes;
  fixed?: boolean;
  position?: "top" | "bottom";
  glass?: boolean;
  backdropClasses?: string;
} & ComponentProps<"nav">;

export function Navbar({
  color = "main",
  hasBorder = true,
  hasShadow = true,
  isRounded = true,
  collapseAt = "sm",
  fixed = true,
  position = "top",
  glass = true,
  children,
  className,
  backdropClasses,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { navbarStyles, backdropStyles } = useNavbarStyles(
    fixed,
    position,
    glass,
    hasBorder,
    hasShadow,
    isRounded,
    isOpen,
    collapseAt,
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
        color,
        position,
        rounded: isRounded,
        collapseAt: collapseAt,
        isOpen,
        setIsOpen,
      }}
    >
      <>
        <nav className={navbarStyles} style={cssColorProps(color)}>
          {children}
        </nav>
        <div className={backdropStyles} onClick={outsideClickHandler}></div>
      </>
    </NavbarContextProvider>
  );
}
