import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PaginationEl from "@/tag-page/TagBrowserPagination";

const meta = {
  title: "Pagination",
  component: PaginationEl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { page: 1, setPage: fn() },
} as Meta<typeof PaginationEl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pagination: Story = {
  args: { page: 1 },
};
