import { ComponentProps } from "react";
import { getNavbarMenuClasses } from "./getNavbarClasses";
import { Composite } from "@floating-ui/react";
import { useIsMobile } from "@/hooks";
import { useNavbarContext } from "./NavbarContext";

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
        <menu className={classes} {...rest}>
          {children}
        </menu>
      }
    />
  );
}
