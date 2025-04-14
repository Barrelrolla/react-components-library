import { Button, ButtonProps } from "../Button";
import { useHamburgerStyles } from "./useHamburgerStyles";

export type HamburgerButtonProps = {
  isOpen: boolean;
} & ButtonProps<"button">;

export function HamburgerButton({
  primaryColor,
  secondaryColor,
  contrasting = true,
  isOpen = false,
  className,
  ...rest
}: HamburgerButtonProps) {
  const { button, container, topLine, midLine, botLine } = useHamburgerStyles(
    contrasting,
    isOpen,
    primaryColor,
    secondaryColor,
    className,
  );
  return (
    <Button
      aria-label="navigation toggle"
      variant="clear"
      clearButtonHover="outline"
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
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
