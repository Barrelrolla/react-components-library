import { ComponentProps, useId } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { getTextFromChildren } from "@/util/helpers";
import { CheckMarkIcon } from "@/icons";

export function AutocompleteItem({
  isSelected,
  disabled,
  children,
  ...rest
}: {
  isSelected: boolean;
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
      className="select-option"
      role="menuitem"
      disabled={disabled}
      {...context.interactions.getItemProps({
        active: isSelected,
        onClick() {
          context.setQuery(itemName);
          context.setIsOpen(false);
        },
      })}
      {...rest}
    >
      {children}
      {isSelected && <CheckMarkIcon />}
    </button>
  );
}
