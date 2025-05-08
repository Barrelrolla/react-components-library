import { twMerge } from "tailwind-merge";
import { CardSizes } from "./CardTypes";

export function getCardStyles({
  vertical,
  size,
  containerClasses,
  className,
}: {
  vertical: boolean;
  size: CardSizes;
  containerClasses?: string;
  className?: string;
}) {
  return {
    cardContainerStyles: twMerge(
      "card-container",
      size === "xs" && "w-xs",
      size === "sm" && "w-sm",
      size === "md" && "w-md",
      size === "lg" && "w-lg",
      size === "xl" && "w-xl",
      containerClasses,
    ),
    cardStyles: twMerge(
      "card",
      "flex-col",
      !vertical && size === "xs" && "@2xs:flex-row",
      !vertical && size === "sm" && "@xs:flex-row",
      !vertical && size === "md" && "@sm:flex-row",
      !vertical && size === "lg" && "@md:flex-row",
      !vertical && size === "xl" && "@lg:flex-row",
      className,
    ),
  };
}

export function getCardInteractStyles({ className }: { className?: string }) {
  return {
    styles: twMerge("card-interact group", className),
  };
}

export function getCardSectionStyles({ className }: { className?: string }) {
  return {
    styles: twMerge("card-section", className),
  };
}

export function getCardTitleStyles({ className }: { className?: string }) {
  return {
    styles: twMerge("card-title", className),
  };
}

export function getCardTextStyles({ className }: { className?: string }) {
  return {
    styles: twMerge("card-text", className),
  };
}

export function getCardActionsStyles({ className }: { className?: string }) {
  return {
    styles: twMerge("card-actions", className),
  };
}

export function getCardImageContainerStyles({
  padded,
  className,
}: {
  padded: boolean;
  className?: string;
}) {
  return {
    styles: twMerge(
      "card-image-container",
      !padded && "h-full",
      padded && "card-image-container-padded",
      className,
    ),
  };
}
