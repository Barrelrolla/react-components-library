import { cssColorPropsReversed } from "@/util";
import { Button, ButtonProps } from "../Button";
import { useHamburgerStyles } from "./useHamburgerStyles";

export type HamburgerButtonProps = {
  isOpen: boolean;
} & ButtonProps<"button">;

export function HamburgerButton({
  color = "main",
  transitions = true,
  isOpen = false,
  style,
  className,
  ...rest
}: HamburgerButtonProps) {
  const { button, container, topLine, midLine, botLine } = useHamburgerStyles({
    isOpen,
    transitions,
    className,
  });
  return (
    <Button
      aria-label="navigation toggle"
      variant="ghost"
      ghostHover="none"
      style={{ ...cssColorPropsReversed(color), ...style }}
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
