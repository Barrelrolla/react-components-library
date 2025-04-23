import { ElementType, MouseEvent, FocusEvent } from "react";
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
  onFocus,
  onBlur,
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
    selectedUnderline,
    selectedUnderlineOffset,
    className,
  });

  return (
    <li>
      <Anchor
        data-selected={selected}
        color={context.color}
        as={as || defaultType}
        selected={selected}
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
