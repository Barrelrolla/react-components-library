import { ReactElement } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { Slot } from "../Slot/Slot";

export function AutocompleteTrigger({ ...rest }: { children: ReactElement }) {
  const context = useAutocompleteContext();
  if (!context) {
    throw new Error(
      "Please use the Autocomplete Trigger only inside a Autocomplete component!",
    );
  }

  const { setQuery, setIsOpen, activeIndex, filteredItems } = context;

  return (
    <Slot
      {...context.interactions.getReferenceProps({
        onChange(e: React.ChangeEvent<HTMLInputElement>) {
          setQuery(e.target.value);
          setIsOpen(true);
        },
        onFocus() {
          setIsOpen(true);
        },
        onKeyDown(e: React.KeyboardEvent) {
          if (
            e.key === "Enter" &&
            activeIndex !== null &&
            filteredItems[activeIndex]
          ) {
            e.preventDefault();
            setQuery(filteredItems[activeIndex]);
            setIsOpen(false);
          }
        },
      })}
      ref={context.data.refs.setReference}
      value={context.query}
      {...rest}
    />
  );
}
