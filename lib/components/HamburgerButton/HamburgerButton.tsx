import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { ColorType } from "@/types";
import { colors } from "@/util/colors";

interface HamburgerButtonProps {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  isOpen: boolean;
  className?: string;
  onClick: () => void;
}
export function HamburgerButton({
  primaryColor = "black",
  secondaryColor = "white",
  className,
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  const hamburgerButtonClasses = twMerge(
    "relative block h-4.5 w-6 p-4 transition-all",
    isOpen && "open",
    isOpen && "rotate-90",
  );
  const lineClasses = twMerge(
    colors[primaryColor].darkShade.regular.bgColor,
    colors[primaryColor].darkHighlightedShade.groupActive.bgColor,
    colors[secondaryColor].lightShade.dark.bgColor,
    colors[secondaryColor].lightHighlightedShade.darkGroupActive.bgColor,
    "absolute top-1.75 left-1 h-0.5 w-6 rotate-0 transition-all duration-300",
  );
  return (
    <Button
      aria-label="toggle navigation"
      variant="clear"
      clearButtonHover="outline"
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      disableScale
      onClick={onClick}
      className={twMerge("px-1 py-0 hover:outline-2", className)}
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
