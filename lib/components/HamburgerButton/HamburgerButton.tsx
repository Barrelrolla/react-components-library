import { cssColorProps } from "@/util";
import { Button, ButtonProps } from "../Button";
import { getHamburgerClasses } from "./getHamburgerClasses";

export type HamburgerButtonProps = {
  /** Indicates whether the menu is open, triggering the icon transformation into an 'X'. */
  isOpen: boolean;
} & ButtonProps<"button">;

/**
 * Animated menu toggle button that transitions between a classic three-line hamburger icon and an 'X' close symbol.
 *
 * Built on top of `Button`, inheriting all visual variant, sizing, and interaction props.
 */
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
    <Button variant="ghost" color={color} className={button} {...rest}>
      <div className={container}>
        <span style={{ ...cssColorProps(color) }} className={topLine}></span>
        <span style={{ ...cssColorProps(color) }} className={midLine}></span>
        <span style={{ ...cssColorProps(color) }} className={botLine}></span>
      </div>
    </Button>
  );
}
