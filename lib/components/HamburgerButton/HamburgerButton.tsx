import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { ButtonProps } from "../Button/Button";
import { ColorMap } from "@/util/colors";

interface HamburgerButtonProps extends ButtonProps<"button"> {
  isOpen: boolean;
}
export function HamburgerButton({
  primaryColor = "black",
  secondaryColor = "white",
  className,
  isOpen,
  ...rest
}: HamburgerButtonProps) {
  const hamburgerButtonClasses = twMerge(
    "relative block h-4.5 w-6 p-4 transition-all",
    isOpen && "open",
    isOpen && "rotate-90",
  );
  const lineClasses = twMerge(
    `bg-${ColorMap[primaryColor].darkShade}`,
    `group-active:bg-${ColorMap[primaryColor].darkHighlightedShade}`,
    `dark:bg-${ColorMap[secondaryColor].lightShade}`,
    `dark:group-active:bg-${ColorMap[secondaryColor].lightHighlightedShade}`,
    "absolute top-1.75 left-1 h-0.5 w-6 rotate-0 transition-all duration-300",
  );
  return (
    <Button
      aria-label="toggle navigation"
      variant="clear"
      clearButtonHover="outline"
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      className={twMerge("px-1 py-0 hover:outline-2", className)}
      {...rest}
    >
      <div className={hamburgerButtonClasses}>
        <span
          className={twMerge(
            lineClasses,
            isOpen && "origin-top-right -translate-x-1 -rotate-45",
          )}
        ></span>
        <span
          className={twMerge(
            lineClasses,
            "translate-y-2",
            isOpen && "opacity-0",
          )}
        ></span>
        <span
          className={twMerge(
            lineClasses,
            "translate-y-4",
            isOpen && "origin-bottom-right -translate-x-1 rotate-45",
          )}
        ></span>
      </div>
    </Button>
  );
}
