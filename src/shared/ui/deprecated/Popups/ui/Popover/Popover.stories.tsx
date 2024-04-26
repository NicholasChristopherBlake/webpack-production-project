import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../../../Button';

const meta: Meta<typeof Popover> = {
  title: 'shared/deprecated/Popups/Popover',
  component: Popover,
  args: {
    trigger: <Button>Open</Button>,
    children: <div>Popover content</div>,
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {};
