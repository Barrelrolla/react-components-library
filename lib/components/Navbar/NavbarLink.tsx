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

  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    setIsOpen(false);
    onClick?.(event);
  }

  const { primaryColor, secondaryColor, collapseAt, setIsOpen } = context;

  const colors = twMerge(
    `hover:bg-${ColorMap[primaryColor].lightHighlight}`,
    `active:bg-${ColorMap[primaryColor].lightActive}`,
    `dark:hover:bg-${ColorMap[secondaryColor].darkHighlight}`,
    `dark:active:bg-${ColorMap[secondaryColor].darkActive}`,
  );
  const selectedColors = twMerge(
    !selected && "outline-offset-0",
    selected && `bg-${ColorMap[secondaryColor].dark}`,
    selected && `dark:bg-${ColorMap[primaryColor].light}`,
    selected && `hover:bg-${ColorMap[secondaryColor].darkHighlight}`,
    selected && `dark:hover:bg-${ColorMap[primaryColor].lightHighlight}`,
    selected && `focus-visible:bg-${ColorMap[secondaryColor].darkHighlight}`,
    selected &&
      `dark:focus-visible:bg-${ColorMap[primaryColor].lightHighlight}`,
    selected && `active:bg-${ColorMap[secondaryColor].darkActive}`,
    selected && `dark:active:bg-${ColorMap[primaryColor].lightActive}`,
    selected && `text-${ColorMap[primaryColor].light}`,
    selected && `dark:text-${ColorMap[secondaryColor].dark}`,
    selected && `hover:text-${ColorMap[primaryColor].lightHighlight}`,
    selected && `dark:hover:text-${ColorMap[secondaryColor].darkHighlight}`,
    selected && `active:text-${ColorMap[primaryColor].lightActive}`,
    selected && `dark:active:text-${ColorMap[secondaryColor].darkActive}`,
    selected && `focus-visible:text-${ColorMap[primaryColor].lightHighlight}`,
    selected &&
      `dark:focus-visible:text-${ColorMap[secondaryColor].darkHighlight}`,
    selected &&
      `focus-visible:outline-${ColorMap[secondaryColor].darkHighlight}`,
    selected &&
      `dark:focus-visible:outline-${ColorMap[primaryColor].lightHighlight}`,
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
