import { useState } from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteTrigger,
} from "../Autocomplete";
import { Input, InputProps } from "./Input";

export type AutocompleteInputProps = {
  /** Array of string options available for autocomplete filtering and selection. */
  items: string[];
} & InputProps;

/**
 * Enhanced text input that filters and provides real-time suggestion options based on user input.
 *
 * Extends standard `Input` props, supporting labels, icons, validation states, and full layout customization
 * alongside floating suggestion items.
 */
export function AutocompleteInput({ items, ...rest }: AutocompleteInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Autocomplete
      query={query}
      onSelectItem={(item) => {
        setQuery(item);
        setIsOpen(false);
      }}
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <AutocompleteTrigger>
        <Input
          {...rest}
          onChange={(e) => {
            const value = e.target.value;
            if (value && value.length > 0) {
              setIsOpen(true);
            } else {
              setIsOpen(false);
            }
            setQuery(value);
          }}
        />
      </AutocompleteTrigger>
      <AutocompleteContent />
    </Autocomplete>
  );
}
