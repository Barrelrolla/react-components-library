import { ComponentProps, useId } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { getTextFromChildren } from "@/util/helpers";
import { CheckMarkIcon } from "@/icons";
import { getFloatingListItemClasses } from "../Floating/getFloatinigClasses";

export type AutocompleteItemProps = {
  /** Indicates whether the option is currently highlighted or active via keyboard navigation or pointer hover. */
  active: boolean;
} & ComponentProps<"button">;

/**
 * Interactive suggestion option item rendered within the autocomplete dropdown menu.
 *
 * Functions as an accessible button element that reflects its selection/highlight state via
 * the `active` prop for visual focus and keyboard traversal feedback.
 */
export function AutocompleteItem({
  active,
  children,
  ...rest
}: AutocompleteItemProps) {
  const context = useAutocompleteContext();
  if (!context) {
    throw new Error(
      "Please use the Autocomplete List Item only inside a Autocomplete",
    );
  }

  const itemName = getTextFromChildren(children);
  const index = context.items.indexOf(itemName);
  const selected =
    index === context.selectedIndex || context.selectedIndices?.includes(index);
  const id = useId();
  const { classes } = getFloatingListItemClasses({
    className: "",
    isMobile: false,
    mobileSheet: false,
  });

  return (
    <div className="flex">
      <button
        id={id}
        className={classes}
        role="menuitem"
        {...context.interactions.getItemProps({
          active,
          onClick() {
            context.onSelectItem(itemName);
          },
          onMouseDown(e) {
            e.preventDefault();
          },
        })}
        data-selected={selected ?? undefined}
        {...rest}
        tabIndex={-1}
        data-active={active === true ? active : undefined}
      >
        <span className="line-clamp-1">{children}</span>
        {selected && <CheckMarkIcon />}
      </button>
    </div>
  );
}
