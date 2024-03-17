import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popups/Popover',
  component: Popover,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {};

