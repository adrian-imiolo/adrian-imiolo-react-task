import type { Meta, StoryObj } from "@storybook/react";
import TableEl from "@/tag-page/TableEl";

const mockData = [
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    name: "javascript",
    count: 2528926,
  },
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    name: "python",
    count: 2192307,
  },
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    name: "java",
    count: 1917376,
  },
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    name: "c#",
    count: 1615020,
  },
];

const meta = {
  title: "Table",
  component: TableEl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { data: mockData, loading: false },
} satisfies Meta<typeof TableEl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: { data: mockData, loading: false },
};
