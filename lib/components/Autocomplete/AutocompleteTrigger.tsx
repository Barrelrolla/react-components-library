import { ReactElement, KeyboardEvent } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { Slot } from "../Slot/Slot";

export type AutocompleteTriggerProps = {
  /** Single React element acting as the input trigger for the autocomplete dropdown. */
  children: ReactElement;
};

/**
 * Anchor trigger component that binds autocomplete interaction handlers, input bindings,
 * and floating reference refs directly to its child element (typically an `<Input />`) without adding extra wrapper DOM nodes.
 *
 * Uses `Slot` under the hood to clone the child element and merge event handlers and references.
 */
export function AutocompleteTrigger({ ...rest }: AutocompleteTriggerProps) {
  const context = useAutocompleteContext();
  if (!context) {
    throw new Error(
      "Please use the Autocomplete Trigger only inside a Autocomplete component!",
    );
  }

  const { activeIndex, filteredItems, onSelectItem } = context;

  return (
    <Slot
      {...context.interactions.getReferenceProps({
        onKeyDown(e: KeyboardEvent) {
          if (
            e.key === "Enter" &&
            activeIndex !== null &&
            filteredItems[activeIndex]
          ) {
            e.preventDefault();
            const selected = filteredItems[activeIndex];
            onSelectItem(selected);
          }
        },
      })}
      ref={context.data.refs.setReference}
      value={context.query}
      {...rest}
    />
  );
}
