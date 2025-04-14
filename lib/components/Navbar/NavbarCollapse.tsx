import { ComponentProps } from "react";
import { useNavbarContext } from "./NavbarContext";
import { useNavbarCollapseStyles } from "./useNavbarStyles";

export type NavbarCollapseProps = {
  wrapperClasses?: string;
} & ComponentProps<"ul">;

export function NavbarCollapse({
  className,
  wrapperClasses,
  children,
  ...rest
}: NavbarCollapseProps) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(
      "Please use the Navbar Link Group component only inside a navbar",
    );
  }

  const { isOpen, position, collapseAt, rounded } = context;

  const { wrapperStyles, listStyles } = useNavbarCollapseStyles(
    position,
    collapseAt,
    isOpen,
    rounded,
    wrapperClasses,
    className,
  );

  return (
    <div className={wrapperStyles}>
      <ul className={listStyles} {...rest}>
        {children}
      </ul>
    </div>
  );
}
