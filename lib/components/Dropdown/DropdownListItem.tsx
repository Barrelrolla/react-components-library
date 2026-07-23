import { useListItem } from "@floating-ui/react";
import { ElementType } from "react";
import { useDropdownContext } from "./DropdownContext";
import { Anchor, AnchorProps } from "../Anchor";
import { useDropdownLinkStyles } from "./useDropdownStyles";

const defaultType = "a";
export function DropdownListItem<E extends ElementType = typeof defaultType>({
  as,
  color = "main",
  children,
  className,
  ...rest
}: AnchorProps<E>) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List Item only inside a Dropdown");
  }
  const { ref, index } = useListItem();
  const { classes } = useDropdownLinkStyles({ className });

  return (
    <li>
      <Anchor
        color={color}
        as={as || defaultType}
        role="menuitem"
        ref={ref}
        tabIndex={index === context.activeIndex ? 0 : -1}
        className={classes}
        underlined={false}
        hoverUnderline={false}
        {...context.interactions.getItemProps()}
        {...rest}
      >
        {children}
      </Anchor>
    </li>
  );
}
