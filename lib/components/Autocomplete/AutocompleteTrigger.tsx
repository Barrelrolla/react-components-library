import { ReactElement, KeyboardEvent } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { Slot } from "../Slot/Slot";

export function AutocompleteTrigger({ ...rest }: { children: ReactElement }) {
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
