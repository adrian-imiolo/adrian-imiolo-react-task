import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import OrderToggle from "@/tag-page/OrderToggle";



const meta = {
    title: 'OrderToggle',
    component: OrderToggle,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    args: { order: "asc", onClick: fn()},

} satisfies Meta<typeof OrderToggle>

export default meta;
type Story = StoryObj<typeof meta>;

export const Ascending: Story = {
    args: { order: "asc" }
}

export const Descending: Story = {
    args: { order: "desc" }
}

