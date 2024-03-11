import type { Meta, StoryObj } from '@storybook/react';

import { Listbox } from './Listbox';

const meta: Meta<typeof Listbox> = {
  title: 'shared/Listbox',
  component: Listbox,
  args: {
    items: [
      { value: '1', content: '123' },
      { value: '2', content: '444' },
      { value: '3', content: '555', disabled: true },
      { value: '4', content: '666' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Primary: Story = {};
export const DirectionTop: Story = {
  args: {
    direction: 'top',
  },
};

