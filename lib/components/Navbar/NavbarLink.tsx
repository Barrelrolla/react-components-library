import { ElementType, MouseEvent, FocusEvent } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarContext } from "./NavbarContext";
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
  underlined = false,
  onClick,
  onFocus,
  onBlur,
  children,
  className,
  ...rest
}: NavbarLinkProps<E>) {
  const context = useNavbarContext();

  function clickHandler(event: MouseEvent) {
    context?.setIsOpen(false);
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

  const { styles, resolvedColor } = useNavbarLinkStyles({
    className,
  });

  return (
    <li>
      <Anchor
        as={as || defaultType}
        data-selected={selected}
        color={resolvedColor}
        underlined={underlined}
        hoverUnderline={hoverUnderline}
        className={styles}
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
