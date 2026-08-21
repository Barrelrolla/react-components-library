import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Select, SelectOption } from "./index";
import { availableColors, availableSizes } from "@/types";
import { SelectContent } from "./SelectContent";
import { SelectGroup } from "./SelectGroup";
import { SelectGroupTitle } from "./SelectGroupTitle";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
  subcomponents: { SelectContent, SelectGroup, SelectGroupTitle, SelectOption },
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  args: {
    name: "select",
    "aria-label": "Select fruit",
    placeholder: "Select fruit",
  },
  argTypes: {
    "aria-label": { table: { disable: true } },
    color: {
      options: availableColors,
      control: { type: "select" },
      table: { category: "controls" },
    },
    size: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    label: { table: { category: "controls" } },
    error: { table: { category: "controls" } },
    multiple: { table: { category: "controls" } },
    isOpen: { table: { category: "controls" } },
    placeholder: { table: { category: "controls" } },
    strategy: { table: { category: "controls" } },
    placement: { table: { category: "controls" } },
    disabled: { table: { category: "controls" } },
    mobileSheet: { table: { category: "controls" } },
    mobileSheetPlacement: { table: { category: "controls" } },
    showClearButton: { table: { category: "controls" } },
    items: { control: false, table: { category: "docs" } },
    name: { control: false, table: { category: "docs" } },
    onOpenChange: { control: false, table: { category: "docs" } },
    initialSelectedIndex: { control: false, table: { category: "docs" } },
    initialSelectedIndices: { control: false, table: { category: "docs" } },
    onSelectedIndexChange: { control: false, table: { category: "docs" } },
    inputRef: { control: false, table: { category: "docs" } },
    labelClassName: { control: false, table: { category: "docs" } },
    errorClassName: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
    wrapperStyle: { control: false, table: { category: "docs" } },
    removeAllItemsAriaLabel: { control: false, table: { category: "docs" } },
    removeItemAriaLabel: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  { name: "Apple", value: "Apple" },
  { name: "Banana", value: "Banana" },
  { name: "Cherry", value: "Cherry" },
  { name: "Grape", value: "Grape" },
  { name: "Kiwi", value: "Kiwi" },
  { name: "Mango", value: "Mango" },
  { name: "Orange", value: "Orange" },
  { name: "Papaya", value: "Papaya" },
  { name: "Pear", value: "Pear" },
  { name: "Strawberry", value: "Strawberry" },
];

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Select {...rest} items={fruits}>
        <SelectContent>
          <SelectGroupTitle>Fruits</SelectGroupTitle>
          <SelectGroup>
            {fruits.map((fruit, index) => {
              return (
                <SelectOption
                  key={fruit.value}
                  index={index}
                  disabled={index === 3}
                >
                  {fruit.name}
                </SelectOption>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {},
};

export const Multiple: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Select {...rest} items={fruits}>
        <SelectContent>
          <SelectGroupTitle>Fruits</SelectGroupTitle>
          <SelectGroup>
            {fruits.map((fruit, index) => {
              return (
                <SelectOption key={fruit.value} index={index}>
                  {fruit.name}
                </SelectOption>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {
    multiple: true,
  },
  argTypes: {
    multiple: { table: { disable: true } },
    items: { table: { disable: true } },
    name: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
};

export const WithLabel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Select {...rest} items={fruits}>
        <SelectContent>
          <SelectGroup>
            {fruits.map((fruit, index) => {
              return (
                <SelectOption key={fruit.value} index={index}>
                  {fruit.name}
                </SelectOption>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {
    label: "Select",
  },
  argTypes: {
    items: { table: { disable: true } },
    name: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
};

export const WithError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Select {...rest} items={fruits}>
        <SelectContent>
          <SelectGroup>
            {fruits.map((fruit, index) => {
              return (
                <SelectOption key={fruit.value} index={index}>
                  {fruit.name}
                </SelectOption>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {
    label: "Select",
    error: "Error",
  },
  argTypes: {
    items: { table: { disable: true } },
    name: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Select {...rest} items={fruits}>
        <SelectContent>
          <SelectGroup>
            {fruits.map((fruit, index) => {
              return (
                <SelectOption key={fruit.value} index={index}>
                  {fruit.name}
                </SelectOption>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {
    label: "Select",
    disabled: true,
  },
  argTypes: {
    items: { table: { disable: true } },
    disabled: { table: { disable: true } },
    name: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
};

export const Sizes: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="grid gap-4">
        {availableSizes.map((size) => (
          <Select label={size} size={size} key={size} {...rest} items={fruits}>
            <SelectContent>
              <SelectGroup>
                {fruits.map((fruit, index) => {
                  return (
                    <SelectOption key={fruit.value} index={index}>
                      {fruit.name}
                    </SelectOption>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </div>
    );
  },
  argTypes: {
    items: { table: { disable: true } },
    size: { table: { disable: true } },
    label: { table: { disable: true } },
    disabled: { table: { disable: true } },
    name: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Select
            label={color}
            color={color}
            key={color}
            {...rest}
            items={fruits}
          >
            <SelectContent>
              <SelectGroup>
                {fruits.map((fruit, index) => {
                  return (
                    <SelectOption key={fruit.value} index={index}>
                      {fruit.name}
                    </SelectOption>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </>
    );
  },
  argTypes: {
    items: { table: { disable: true } },
    color: { table: { disable: true } },
    disabled: { table: { disable: true } },
    name: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    initialSelectedIndex: { table: { disable: true } },
    initialSelectedIndices: { table: { disable: true } },
    onSelectedIndexChange: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    removeAllItemsAriaLabel: { table: { disable: true } },
    removeItemAriaLabel: { table: { disable: true } },
  },
};
