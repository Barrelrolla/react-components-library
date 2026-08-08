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
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const autocomplete = canvas.getByText("Autocomplete");
  //   await expect(autocomplete, "renders").toBeTruthy();
  // },
  render: ({ ...rest }) => {
    const [query, setQuery] = useState("");
    return (
      <>
        <Autocomplete {...rest} query={query} setQuery={setQuery} items={it}>
          <AutocompleteTrigger>
            <Input
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </AutocompleteTrigger>
          <AutocompleteContent />
        </Autocomplete>
      </>
    );
  },
};
