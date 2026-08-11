import { ElementType, MouseEvent, FocusEvent } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarContext } from "./NavbarContext";
import { getNavbarLinkClasses } from "./getNavbarClasses";
import { CompositeItem } from "@floating-ui/react";

const defaultType = "a";
export type NavbarLinkProps<E extends ElementType> = {
  /** Indicates whether the link represents the currently active or selected route/page. */
  selected?: boolean;
} & AnchorProps<E>;

/**
 * Polymorphic navigation link component designed for use within `Navbar` menus and collapsible navigation lists.
 *
 * Renders semantically as an `a` tag by default, but supports custom element types (such as framework-specific
 * router `Link` components) via the polymorphic `as` prop. Automatically applies active state styling when `selected` is `true`.
 */
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

  const { classes } = getNavbarLinkClasses({
    className,
    navbarContext,
  });

  return (
    <li role="menuitem">
      <CompositeItem
        render={
          <Anchor
            as={as || defaultType}
            data-selected={selected}
            color={navbarContext?.color || "main"}
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
