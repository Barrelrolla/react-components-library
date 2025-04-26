import { ComponentProps, useEffect, useState } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps } from "@/util";
import { NavbarContextProvider } from "./NavbarContext";
import { useNavbarStyles } from "./useNavbarStyles";

export type NavbarProps = {
  color?: ColorType;
  hasShadow?: boolean;
  collapseAt?: ResponsiveSizes;
  fixed?: boolean;
  position?: "top" | "bottom";
  glass?: boolean;
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
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { headerStyles, navStyles, backdropStyles } = useNavbarStyles({
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
      <>
        <header className={headerStyles}>
          <nav className={navStyles} style={cssColorProps(color)}>
            {children}
          </nav>
          <div className={backdropStyles} onClick={outsideClickHandler}></div>
        </header>
      </>
    </NavbarContextProvider>
  );
}
