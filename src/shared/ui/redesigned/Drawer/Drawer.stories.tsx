import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { Button } from '../../deprecated/Button';

const meta: Meta<typeof Drawer> = {
  title: 'shared/redesigned/Drawer',
  component: Drawer,
  args: {
    children: <Button>Drawer Button</Button>,
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {};
