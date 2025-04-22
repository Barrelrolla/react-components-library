import {
  cssColorProps,
  cssColorPropsReversed,
  cssColorUniform,
} from "@/util/cssColorProps";
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
  const { button, container, topLine, midLine, botLine } = useHamburgerStyles(
    isOpen,
    transitions,
    className,
  );
  return (
    <Button
      aria-label="navigation toggle"
      variant="ghost"
      ghostHover="none"
      color={color}
      style={{ ...cssColorUniform(color), ...style }}
      className={button}
      {...rest}
    >
      <div className={container}>
        <span className={topLine}></span>
        <span className={midLine}></span>
        <span className={botLine}></span>
      </div>
    </Button>
  );
}
