import { ComponentProps } from "react";
import { getNavbarCollapseClasses } from "./getNavbarClasses";
import { useNavbarContext } from "./NavbarContext";

/**
 * Main content container for `Navbar` elements, such as navigation link groups or actions.
 *
 * Automatically handles responsive visibility by hiding on smaller screens when the navbar
 * collapses into a mobile menu format.
 */
export function NavbarCollapse({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const navbarContext = useNavbarContext();
  const { classes } = getNavbarCollapseClasses({
    className,
    navbarContext,
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
