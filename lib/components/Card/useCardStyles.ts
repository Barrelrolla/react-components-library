import { twMerge } from "tailwind-merge";
import { CardSizes } from "./CardTypes";
import { useCardContext } from "./CardContext";

function getErrorMessage(componentName: string) {
  return `Please use the the ${componentName} only inside a Card component`;
}

export function useCardStyles({
  horizontal,
  size,
  containerClasses,
  className,
}: {
  horizontal: boolean;
  size: CardSizes;
  containerClasses?: string;
  className?: string;
}) {
  return {
    containerStyles: twMerge(
      "card-container",
      size === "xs" && "w-xs",
      size === "sm" && "w-sm",
      size === "md" && "w-md",
      size === "lg" && "w-lg",
      size === "xl" && "w-xl",
      containerClasses,
    ),
    styles: twMerge(
      "card",
      "flex-col",
      horizontal && size === "xs" && "@2xs:flex-row",
      horizontal && size === "sm" && "@xs:flex-row",
      horizontal && size === "md" && "@sm:flex-row",
      horizontal && size === "lg" && "@md:flex-row",
      horizontal && size === "xl" && "@lg:flex-row",
      className,
    ),
  };
}

export function useCardInteractStyles({ className }: { className?: string }) {
  const context = useCardContext();
  if (!context) {
    throw new Error(getErrorMessage("Card interact"));
  }

  return {
    styles: twMerge("card-interact group", className),
    color: context.color,
  };
}

export function useCardSectionStyles({ className }: { className?: string }) {
  const context = useCardContext();
  if (!context) {
    throw new Error(getErrorMessage("Card section"));
  }

  return {
    styles: twMerge("card-section", className),
  };
}

export function useCardTitleStyles({ className }: { className?: string }) {
  const context = useCardContext();
  if (!context) {
    throw new Error(getErrorMessage("Card title"));
  }

  return {
    styles: twMerge("card-title", className),
  };
}

export function useCardTextStyles({ className }: { className?: string }) {
  const context = useCardContext();
  if (!context) {
    throw new Error(getErrorMessage("Card text"));
  }

  return {
    styles: twMerge("card-text", className),
  };
}

export function useCardActionsStyles({ className }: { className?: string }) {
  const context = useCardContext();
  if (!context) {
    throw new Error(getErrorMessage("Card actions"));
  }

  return {
    styles: twMerge("card-actions", className),
  };
}

export function useCardImageContainerStyles({
  padded,
  className,
}: {
  padded: boolean;
  className?: string;
}) {
  const context = useCardContext();
  if (!context) {
    throw new Error(getErrorMessage("Card image container"));
  }

  return {
    styles: twMerge(
      "card-image-container",
      !padded && "h-full",
      padded && "card-image-container-padded",
      className,
    ),
  };
}
