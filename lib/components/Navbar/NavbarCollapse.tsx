import { ComponentProps } from "react";
import { useNavbarCollapseStyles } from "./useNavbarStyles";

export type NavbarCollapseProps = {
  /** The list has a wrapper. Use this to add classes to it. */
  wrapperClasses?: string;
} & ComponentProps<"ul">;

/** List that hides when the Navbar is small. */
export function NavbarCollapse({
  className,
  wrapperClasses,
  children,
  ...rest
}: NavbarCollapseProps) {
  const { wrapperStyles, styles } = useNavbarCollapseStyles({
    wrapperClasses,
    className,
  });

  return (
    <div className={wrapperStyles}>
      <ul className={styles} {...rest}>
        {children}
      </ul>
    </div>
  );
}
