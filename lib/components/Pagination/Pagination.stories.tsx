import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Pagination } from "./Pagination";
import { availableColors } from "@/types";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  tags: ["autodocs"],
  component: Pagination,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      options: availableColors,
      control: { type: "select" },
      table: { category: "controls" },
    },
    visiblePages: {
      table: { category: "controls" },
    },
    pageCount: {
      table: { category: "controls" },
    },
    currentPage: {
      control: { disable: true },
      table: { category: "docs" },
    },
    onPageChange: {
      control: { disable: true },
      table: { category: "docs" },
    },
    previousAriaLabel: {
      control: { disable: true },
      table: { category: "docs" },
    },
    nextAriaLabel: {
      control: { disable: true },
      table: { category: "docs" },
    },
  },
  args: {
    visiblePages: 7,
    pageCount: 20,
    previousAriaLabel: "previous",
    nextAriaLabel: "next",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByText(1);
    await expect(pagination, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    const [page, setPage] = useState(1);
    return <Pagination {...rest} currentPage={page} onPageChange={setPage} />;
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    const [page, setPage] = useState(1);
    return (
      <>
        {availableColors.map((color) => (
          <Pagination
            color={color}
            key={color}
            {...rest}
            currentPage={page}
            onPageChange={setPage}
          />
        ))}
      </>
    );
  },
  argTypes: {
    currentPage: { table: { disable: true } },
    onPageChange: { table: { disable: true } },
    previousAriaLabel: { table: { disable: true } },
    nextAriaLabel: { table: { disable: true } },
  },
};
