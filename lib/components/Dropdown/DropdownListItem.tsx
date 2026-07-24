import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import { ElementType, MouseEvent, FocusEvent } from "react";
import { useDropdownContext } from "./DropdownContext";
import { Anchor, AnchorProps } from "../Anchor";
import { useDropdownLinkStyles } from "./useDropdownStyles";

const defaultType = "a";
export function DropdownListItem<E extends ElementType = typeof defaultType>({
  as,
  ref,
  color = "main",
  disabled,
  children,
  className,
  ...rest
}: { disabled?: boolean } & AnchorProps<E>) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List Item only inside a Dropdown");
  }
  const item = useListItem();
  const tree = useFloatingTree();
  const { classes } = useDropdownLinkStyles({ className });
  const isActive = item.index === context.activeIndex;

  return (
    <li>
      <Anchor
        color={color}
        as={as || defaultType}
        role="menuitem"
        ref={useMergeRefs([item.ref, ref])}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        underlined={false}
        hoverUnderline={false}
        {...context?.getItemProps({
          onClick(event: MouseEvent<HTMLButtonElement>) {
            rest.onClick?.(event);
            tree?.events.emit("click");
          },
          onFocus(event: FocusEvent<HTMLButtonElement>) {
            rest.onFocus?.(event);
            context.setHasFocusInside(true);
          },
        })}
        {...rest}
      >
        {children}
      </Anchor>
    </li>
  );
}
