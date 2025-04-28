import { ElementType, MouseEvent, FocusEvent } from "react";
import { useNavbarContext } from "./NavbarContext";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarLinkStyles } from "./useNavbarStyles";

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
  useBgColor = false,
  underlined = false,
  onClick,
  onFocus,
  onBlur,
  children,
  className,
  ...rest
}: NavbarLinkProps<E>) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(
      "Please use the NavbarLink component only inside a Navbar.",
    );
  }

  function clickHandler(event: MouseEvent) {
    context?.setIsOpen(false);
    window.scrollTo(0, 0);
    onClick?.(event);
  }

  function focusHandler(event: FocusEvent) {
    context?.setIsOpen(true);
    onFocus?.(event);
  }
  function blurHandler(event: FocusEvent) {
    context?.setIsOpen(false);
    onBlur?.(event);
  }

  const { collapseAt } = context;
  const classes = useNavbarLinkStyles({
    collapseAt,
    className,
  });

  return (
    <li>
      <Anchor
        data-selected={selected}
        color={context.color}
        as={as || defaultType}
        selected={selected}
        useBgColor={useBgColor}
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
    </li>
  );
}
