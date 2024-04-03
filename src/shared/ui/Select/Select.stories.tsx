import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Enter value',
    options: [
      { value: '123', content: 'First' },
      { value: '1234', content: 'Second' },
      { value: '12345', content: 'Third' },
    ],
  },
};
