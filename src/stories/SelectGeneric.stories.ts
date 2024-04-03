import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectGeneric from '@/tag-page/SelectGeneric';

const meta = {
        title: 'SelectGeneric',
        component: SelectGeneric,
        parameters: {
            layout: 'centered',
        },
        tags: ['autodocs'],
        args: { value: "asc", onChange: fn(), options: ["popular", "activity", "name"], className: "" },

} satisfies Meta <typeof SelectGeneric>

export default meta
type Story = StoryObj<typeof meta>;

export const SortDirection: Story = {
    args: { value: "popular", onChange: fn(), options: ["popular", "activity", "name"] }
}
export const PageSize: Story = {
    args: { value: "10", onChange: fn(), options: ["10", "20", "30"] }
}