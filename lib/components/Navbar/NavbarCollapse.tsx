import { ComponentProps } from "react";
import { useNavbarContext } from "./NavbarContext";
import { useNavbarCollapseStyles } from "./useNavbarStyles";

export type NavbarCollapseProps = {
  transitions?: boolean;
  wrapperClasses?: string;
} & ComponentProps<"ul">;

export function NavbarCollapse({
  transitions = true,
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

  const { isOpen, position, collapseAt } = context;

  const { wrapperStyles, listStyles } = useNavbarCollapseStyles({
    position,
    collapseAt,
    isOpen,
    transitions,
    wrapperClasses,
    className,
  });

  return (
    <div className={wrapperStyles}>
      <ul className={listStyles} {...rest}>
        {children}
      </ul>
    </div>
  );
}
