import { cssColorPropsReversed } from "@/util";
import { Button, ButtonProps } from "../Button";
import { useHamburgerStyles } from "./useHamburgerStyles";

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
  const { button, container, topLine, midLine, botLine } = useHamburgerStyles({
    isOpen,
    className,
  });
  return (
    <Button
      aria-label="navigation toggle"
      variant="ghost"
      ghostHover="none"
      color={color}
      className={button}
      {...rest}
    >
      <div className={container}>
        <span
          style={{ ...cssColorPropsReversed(color) }}
          className={topLine}
        ></span>
        <span
          style={{ ...cssColorPropsReversed(color) }}
          className={midLine}
        ></span>
        <span
          style={{ ...cssColorPropsReversed(color) }}
          className={botLine}
        ></span>
      </div>
    </Button>
  );
}
