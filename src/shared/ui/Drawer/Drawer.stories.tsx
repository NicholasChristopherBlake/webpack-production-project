import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { Button } from '../Button';

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
  args: {
    children: <Button>Drawer Button</Button>,
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {};
