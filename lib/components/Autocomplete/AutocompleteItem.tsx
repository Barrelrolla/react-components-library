import { ComponentProps, useId } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { getTextFromChildren } from "@/util/helpers";

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
  const id = useId();

  return (
    <button
      id={id}
      className="floating-list-item"
      role="menuitem"
      disabled={disabled}
      {...context.interactions.getItemProps({
        active,
        onClick() {
          context.onSelectItem(itemName);
        },
      })}
      {...rest}
      tabIndex={-1}
      data-active={active === true ? active : undefined}
    >
      {children}
    </button>
  );
}
