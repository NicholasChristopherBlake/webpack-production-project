import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'Type text',
    value: 'some text',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};
