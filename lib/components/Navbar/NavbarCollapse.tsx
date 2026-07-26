import { ComponentProps } from "react";
import { getNavbarCollapseClasses } from "./getNavbarClasses";
import { useNavbarContext } from "./NavbarContext";

/** List that hides when the Navbar is small. */
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
