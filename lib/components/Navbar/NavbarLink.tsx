import { ElementType, useContext, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Anchor } from "../Anchor";
import { NavbarContext } from "./NavbarContext";
import { PolymorphicProps } from "@/types";
import { ColorMap } from "@/util/colors";

const defaultType = "a";
export type NavbarLinkProps<E extends ElementType> = {
  selected?: boolean;
  disableUnderline?: boolean;
  disableHoverBG?: boolean;
} & PolymorphicProps<E>;

export function NavbarLink<E extends ElementType = typeof defaultType>({
  as,
  selected,
  disableUnderline = false,
  disableHoverBG = true,
  disableSelectedHighlight = false,
  onClick,
  children,
  className,
  ...rest
}: NavbarLinkProps<E>) {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the NavbarLink component only inside a Navbar.",
    );
  }

  const { primaryColor, secondaryColor, collapseAt, setIsOpen } = context;
  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    setIsOpen(false);
    onClick?.(event);
  }

  const colors = twMerge(
    `hover:bg-${ColorMap[primaryColor].lightHighlightedShade}`,
    `active:bg-${ColorMap[primaryColor].lightActiveShade}`,
    `dark:hover:bg-${ColorMap[secondaryColor].darkHighlightedShade}`,
    `dark:active:bg-${ColorMap[secondaryColor].darkActiveShade}`,
  );
  const selectedColors = twMerge(
    !selected && "outline-offset-0",
    selected && `bg-${ColorMap[secondaryColor].darkShade}`,
    selected && `dark:bg-${ColorMap[primaryColor].lightShade}`,
    selected && `hover:bg-${ColorMap[secondaryColor].darkHighlightedShade}`,
    selected && `dark:hover:bg-${ColorMap[primaryColor].lightHighlightedShade}`,
    selected &&
      `focus-visible:bg-${ColorMap[secondaryColor].darkHighlightedShade}`,
    selected &&
      `dark:focus-visible:bg-${ColorMap[primaryColor].lightHighlightedShade}`,
    selected && `active:bg-${ColorMap[secondaryColor].darkActiveShade}`,
    selected && `dark:active:bg-${ColorMap[primaryColor].lightActiveShade}`,
    selected && `text-${ColorMap[primaryColor].lightShade}`,
    selected && `dark:text-${ColorMap[secondaryColor].darkShade}`,
    selected && `hover:text-${ColorMap[primaryColor].lightHighlightedShade}`,
    selected &&
      `dark:hover:text-${ColorMap[secondaryColor].darkHighlightedShade}`,
    selected && `active:text-${ColorMap[primaryColor].lightActiveShade}`,
    selected && `dark:active:text-${ColorMap[secondaryColor].darkActiveShade}`,
    selected &&
      `focus-visible:text-${ColorMap[primaryColor].lightHighlightedShade}`,
    selected &&
      `dark:focus-visible:text-${ColorMap[secondaryColor].darkHighlightedShade}`,
    selected &&
      `focus-visible:outline-${ColorMap[secondaryColor].darkHighlightedShade}`,
    selected &&
      `dark:focus-visible:outline-${ColorMap[primaryColor].lightHighlightedShade}`,
  );
  const classes = twMerge(
    "flex justify-start p-2",
    !disableHoverBG && colors,
    !disableSelectedHighlight && selectedColors,
    (!disableHoverBG || !disableSelectedHighlight) &&
      "transition-colors duration-300",
    collapseAt === "sm" && "sm:px-2 sm:py-0",
    collapseAt === "md" && "md:px-2 md:py-0",
    collapseAt === "lg" && "lg:px-2 lg:py-0",
    collapseAt === "xl" && "xl:px-2 xl:py-0",
    className,
  );
  return (
    <li>
      <Anchor
        primaryColor={secondaryColor}
        secondaryColor={primaryColor}
        disableUnderline={disableUnderline}
        as={as || defaultType}
        selected={selected}
        className={classes}
        onClick={clickHandler}
        {...rest}
      >
        {children}
      </Anchor>
    </li>
  );
}
