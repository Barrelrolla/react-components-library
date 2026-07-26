import { ComponentProps } from "react";
import { useNavbarCollapseStyles } from "./useNavbarStyles";

export type NavbarCollapseProps = {} & ComponentProps<"menu">;

/** List that hides when the Navbar is small. */
export function NavbarCollapse({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = useNavbarCollapseStyles({
    className,
  });

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
