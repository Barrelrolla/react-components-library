import { ComponentProps, useId } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { getTextFromChildren } from "@/util/helpers";
import { CheckMarkIcon } from "@/icons";
import { getFloatingListItemClasses } from "../Floating/getFloatinigClasses";

export function AutocompleteItem({
  active,
  disabled,
  children,
  ...rest
}: {
  active: boolean;
  disabled?: boolean;
} & ComponentProps<"button">) {
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
        disabled={disabled}
        {...context.interactions.getItemProps({
          active,
          onClick() {
            context.onSelectItem(itemName);
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
