import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { availableColors, availablePlacements } from "@/types";
import { Input } from "../index";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteTrigger,
} from "./index";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  tags: ["autodocs"],
  component: Autocomplete,
  subcomponents: { AutocompleteContent, AutocompleteItem, AutocompleteTrigger },
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      control: "select",
      options: availableColors,
      table: { category: "controls" },
    },
    placement: {
      control: "select",
      options: availablePlacements,
      table: { category: "controls" },
    },
    strategy: {
      control: "radio",
      table: { category: "controls" },
    },
    disabled: {
      control: "boolean",
      table: { category: "controls" },
    },
    isOpen: { control: false, table: { category: "docs" } },
    setIsOpen: { control: false, table: { category: "docs" } },
    items: { control: false, table: { category: "docs" } },
    query: { control: false, table: { category: "docs" } },
    onSelectItem: { control: false, table: { category: "docs" } },
    selectedIndex: { control: false, table: { category: "docs" } },
    selectedIndices: { control: false, table: { category: "docs" } },
    triggerRef: { control: false, table: { category: "docs" } },
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
            placeholder="Search 100 000 items"
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
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
const items = Array.from({ length: 100000 }, (_, i) => \`item \${i + 1}\`);

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Autocomplete
      query={query}
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onSelectItem={(item) => {
        setQuery(item);
        setIsOpen(false);
      }}
    >
      <AutocompleteTrigger>
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            setIsOpen(!!value);
          }}
        />
      </AutocompleteTrigger>

      <AutocompleteContent />
    </Autocomplete>
  );
}
        `,
      },
    },
  },
};
