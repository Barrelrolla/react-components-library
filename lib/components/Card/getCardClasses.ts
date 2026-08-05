import { twMerge } from "tailwind-merge";
import { CardSizes } from "./CardTypes";
import { CardContextType } from "./CardContext";

function getErrorMessage(componentName: string) {
  return `Please use the the ${componentName} only inside a Card component`;
}

export function getCardClasses({
  horizontal,
  size,
  containerClassName,
  className,
}: {
  horizontal: boolean;
  size: CardSizes;
  containerClassName?: string;
  className?: string;
}) {
  return {
    containerClasses: twMerge(
      "card-container",
      horizontal && "@container",
      size === "xs" && "max-w-xs",
      size === "sm" && "max-w-sm",
      size === "md" && "max-w-md",
      size === "lg" && "max-w-lg",
      size === "xl" && "max-w-xl",
      containerClassName,
    ),
    classes: twMerge(
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

export function getCardInteractClasses({
  className,
  cardContext,
}: {
  className?: string;
  cardContext: CardContextType;
}) {
  if (!cardContext) {
    throw new Error(getErrorMessage("Card interact"));
  }

  return {
    classes: twMerge("card-interact group", className),
  };
}

export function getCardSectionClasses({
  className,
  cardContext,
}: {
  className?: string;
  cardContext: CardContextType;
}) {
  if (!cardContext) {
    throw new Error(getErrorMessage("Card section"));
  }

  return {
    classes: twMerge("card-section", className),
  };
}

export function getCardTitleClasses({
  className,
  cardContext,
}: {
  className?: string;
  cardContext: CardContextType;
}) {
  if (!cardContext) {
    throw new Error(getErrorMessage("Card title"));
  }

  return {
    classes: twMerge("card-title", className),
  };
}

export function getCardTextClasses({
  className,
  cardContext,
}: {
  className?: string;
  cardContext: CardContextType;
}) {
  if (!cardContext) {
    throw new Error(getErrorMessage("Card text"));
  }

  return {
    classes: twMerge("card-text", className),
  };
}

export function getCardActionsClasses({
  className,
  cardContext,
}: {
  className?: string;
  cardContext: CardContextType;
}) {
  if (!cardContext) {
    throw new Error(getErrorMessage("Card actions"));
  }

  return {
    classes: twMerge("card-actions", className),
  };
}

export function getCardImageContainerClasses({
  padded,
  className,
  cardContext,
}: {
  padded: boolean;
  className?: string;
  cardContext: CardContextType;
}) {
  if (!cardContext) {
    throw new Error(getErrorMessage("Card image container"));
  }

  return {
    classes: twMerge(
      "card-image-container",
      !padded && "h-full",
      padded && "card-image-container-padded",
      className,
    ),
  };
}
