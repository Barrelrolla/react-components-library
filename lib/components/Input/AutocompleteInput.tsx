import { useState } from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteTrigger,
} from "../Autocomplete";
import { Input, InputProps } from "./Input";

export type AutocompleteInputProps = {
  items: string[];
} & InputProps;

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
