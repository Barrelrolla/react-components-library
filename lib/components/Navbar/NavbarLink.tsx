import { ElementType, MouseEvent } from "react";
import { useNavbarContext } from "./NavbarContext";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarLinkStyles } from "./useNavbarStyles";

const defaultType = "a";
export type NavbarLinkProps<E extends ElementType> = {
  selected?: boolean;
  bgHighlight?: boolean;
  selectedHighlight?: boolean;
  selectedUnderline?: boolean;
  selectedUnderlineOffset?: boolean;
  selectedClasses?: string;
} & AnchorProps<E>;

export function NavbarLink<E extends ElementType = typeof defaultType>({
  as,
  selected = false,
  selectedUnderline = true,
  selectedUnderlineOffset = true,
  bgHighlight = false,
  selectedHighlight = true,
  onClick,
  children,
  selectedClasses,
  className,
  ...rest
}: NavbarLinkProps<E>) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(
      "Please use the NavbarLink component only inside a Navbar.",
    );
  }

  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    context?.setIsOpen(false);
    window.scrollTo(0, 0);
    onClick?.(event);
  }

  const { primaryColor, secondaryColor, collapseAt } = context;
  const classes = useNavbarLinkStyles(
    primaryColor,
    secondaryColor,
    selected,
    bgHighlight,
    selectedHighlight,
    collapseAt,
    selectedUnderline,
    selectedUnderlineOffset,
    className,
    selectedClasses,
  );

  return (
    <li>
      <Anchor
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
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
