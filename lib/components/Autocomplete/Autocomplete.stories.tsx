import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { Input } from "../Input";
import { useState } from "react";
import { AutocompleteContent } from "./AutocompleteContent";
import { AutocompleteTrigger } from "./AutocompleteTrigger";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  tags: ["autodocs"],
  component: Autocomplete,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { name: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const it = Array.from({ length: 100000 }, (_, i) => `item ${i + 1}`);

export const Default: Story = {
  render: ({ ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    return (
      <Autocomplete
        {...rest}
        query={query}
        onSelectItem={(item) => {
          setQuery(item);
          setIsOpen(false);
        }}
        items={it}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <AutocompleteTrigger>
          <Input
            placeholder="search"
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
  },
};
