import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import { ElementType, MouseEvent, FocusEvent } from "react";
import { useDropdownContext } from "./DropdownContext";
import { Anchor, AnchorProps } from "../Anchor";
import { getDropdownLinkClasses } from "./getDropdownClasses";
import { CaretDownIcon } from "@/icons";
import { getTextFromChildren } from "@/util/helpers";

const defaultType = "button";
export function DropdownListItem<E extends ElementType = typeof defaultType>({
  as,
  color,
  ref,
  disabled,
  showCaret,
  children,
  className,
  ...rest
}: { disabled?: boolean; showCaret?: boolean } & AnchorProps<E>) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List Item only inside a Dropdown");
  }

  const label = getTextFromChildren(children);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === context.activeIndex;
  const { classes } = getDropdownLinkClasses({ className });

  return (
    <li>
      <Anchor
        as={as || defaultType}
        color={color ?? "main"}
        role="menuitem"
        ref={useMergeRefs([item.ref, ref])}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        underlined={false}
        hoverUnderline={false}
        {...context?.interactions.getItemProps({
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
        {showCaret && <CaretDownIcon className="inline -rotate-90" />}
      </Anchor>
    </li>
  );
}
