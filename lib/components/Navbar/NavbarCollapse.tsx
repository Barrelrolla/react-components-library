import { ComponentProps } from "react";
import { useNavbarContext } from "./NavbarContext";
import { useNavbarCollapseStyles } from "./useNavbarStyles";

export type NavbarCollapseProps = {
  /** Set to `false` to disable transition animations. */
  transitions?: boolean;
  /** The list has a wrapper. Use this to add classes to it. */
  wrapperClasses?: string;
} & ComponentProps<"ul">;

/** List that hides when the Navbar is small. */
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
