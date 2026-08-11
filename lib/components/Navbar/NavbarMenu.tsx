import { ComponentProps } from "react";
import { getNavbarMenuClasses } from "./getNavbarClasses";
import { Composite } from "@floating-ui/react";
import { useIsMobile } from "@/hooks";
import { useNavbarContext } from "./NavbarContext";

/**
 * Navigation list container that wraps individual `NavbarLink` or menu items within a `Navbar`.
 *
 * Manages semantic list structuring (`ul`) and coordinates layout spacing across both desktop horizontal
 * navigation bars and mobile collapsible menus.
 */
export function NavbarMenu({
  className,
  children,
  ...rest
}: ComponentProps<"menu">) {
  const navbarContext = useNavbarContext();
  const { classes } = getNavbarMenuClasses({ className, navbarContext });

  const context = useNavbarContext();
  const isMobile = useIsMobile();
  if (!context) {
    throw new Error("Please use the Navbar Collapse");
  }

  return (
    <Composite
      orientation={isMobile ? "vertical" : "horizontal"}
      render={
        <menu
          role={isMobile ? "menu" : "menubar"}
          className={classes}
          {...rest}
        >
          {children}
        </menu>
      }
    />
  );
}
