import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {};

