import { ComponentProps, useEffect, useState } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { NavbarContextProvider } from "./NavbarContext";
import { getNavbarClasses } from "./getNavbarClasses";

export type NavbarProps = {
  /** Color variant applied to the navbar background and nested navigational elements. */
  color?: ColorType;
  /** When `true`, displays a subtle drop shadow beneath the navbar for elevated depth. */
  hasShadow?: boolean;
  /** Breakpoint size at which the mobile expandable menu transforms into a expanded desktop navigation layout. */
  collapseAt?: ResponsiveSizes;
  /** Pins the navbar to a fixed screen position during scrolling. Requires appropriate page spacing or padding. */
  fixed?: boolean;
  /** Screen edge alignment when `fixed` positioning is enabled. Defaults to `"top"`. */
  position?: "top" | "bottom";
  /** Applies a semi-transparent background with a blurred glassmorphism backdrop filter. */
  glass?: boolean;
  /** Additional CSS class names applied to the backdrop overlay rendered when the mobile menu is open. */
  backdropClassName?: string;
} & ComponentProps<"nav">;

/**
 * Top-level application navigation bar providing layout container support, responsive collapse behaviors,
 * fixed positioning, and visual customization options like glassmorphism effects.
 */
export function Navbar({
  color = "primary",
  hasShadow = true,
  collapseAt = "sm",
  fixed = true,
  position = "top",
  glass = true,
  style,
  children,
  className,
  backdropClassName,
  ...rest
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { classes, navClasses, backdropClasses } = getNavbarClasses({
    fixed,
    position,
    glass,
    hasShadow,
    isOpen,
    collapseAt,
    className,
    backdropClassName,
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
      <header
        className={classes}
        style={{ ...cssColorPropsReversed(color), ...style }}
      >
        <nav className={navClasses} {...rest}>
          {children}
        </nav>
      </header>
      <div className={backdropClasses} onClick={outsideClickHandler}></div>
    </NavbarContextProvider>
  );
}
