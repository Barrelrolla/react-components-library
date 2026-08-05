import { cssColorProps } from "@/util";
import { Button, ButtonProps } from "../Button";
import { getHamburgerClasses } from "./getHamburgerClasses";

export type HamburgerButtonProps = {
  /** The component that uses it, should provide its isOpen state here. */
  isOpen: boolean;
} & ButtonProps<"button">;

/** A hamburger button that becomes an X on open */
export function HamburgerButton({
  color = "main",
  isOpen = false,
  className,
  ...rest
}: HamburgerButtonProps) {
  const { button, container, topLine, midLine, botLine } = getHamburgerClasses({
    isOpen,
    className,
  });
  return (
    <Button
      aria-label="navigation toggle"
      variant="ghost"
      color={color}
      className={button}
      {...rest}
    >
      <div className={container}>
        <span style={{ ...cssColorProps(color) }} className={topLine}></span>
        <span style={{ ...cssColorProps(color) }} className={midLine}></span>
        <span style={{ ...cssColorProps(color) }} className={botLine}></span>
      </div>
    </Button>
  );
}
