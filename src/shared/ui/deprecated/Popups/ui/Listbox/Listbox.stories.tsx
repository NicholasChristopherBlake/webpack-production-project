import type { Meta, StoryObj } from '@storybook/react';

import { Listbox } from './Listbox';

const meta: Meta<typeof Listbox> = {
  title: 'shared/deprecated/Popups/Listbox',
  component: Listbox,
  args: {
    value: 'choose',
    items: [
      { value: '1', content: '123' },
      { value: '2', content: '444' },
      { value: '3', content: '555', disabled: true },
      { value: '4', content: '666' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const TopLeft: Story = {
  args: {
    direction: 'top left',
  },
};
export const TopRight: Story = {
  args: {
    direction: 'top right',
  },
};
export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
  },
};
export const BottomRight: Story = {
  args: {
    direction: 'bottom right',
  },
};
