import { ElementType, MouseEvent, FocusEvent } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarContext } from "./NavbarContext";
import { getNavbarLinkClasses } from "./getNavbarClasses";
import { CompositeItem } from "@floating-ui/react";

const defaultType = "a";
export type NavbarLinkProps<E extends ElementType> = {
  /** Is the current menu item selected. */
  selected?: boolean;
} & AnchorProps<E>;

/** Link to be used in the Collapsable list of the Navbar. */
export function NavbarLink<E extends ElementType = typeof defaultType>({
  as,
  selected = false,
  hoverUnderline = false,
  underlined = false,
  onClick,
  onFocus,
  onBlur,
  children,
  className,
  ...rest
}: NavbarLinkProps<E>) {
  const navbarContext = useNavbarContext();

  function clickHandler(event: MouseEvent) {
    navbarContext?.setIsOpen(false);
    onClick?.(event);
  }

  function focusHandler(event: FocusEvent) {
    navbarContext?.setIsOpen(true);
    onFocus?.(event);
  }
  function blurHandler(event: FocusEvent) {
    navbarContext?.setIsOpen(false);
    onBlur?.(event);
  }

  const { classes, resolvedColor } = getNavbarLinkClasses({
    className,
    navbarContext,
  });

  return (
    <li>
      <CompositeItem
        render={
          <Anchor
            as={as || defaultType}
            data-selected={selected}
            color={resolvedColor}
            underlined={underlined}
            hoverUnderline={hoverUnderline}
            className={classes}
            onClick={clickHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            {...rest}
          >
            {children}
          </Anchor>
        }
      />
    </li>
  );
}
