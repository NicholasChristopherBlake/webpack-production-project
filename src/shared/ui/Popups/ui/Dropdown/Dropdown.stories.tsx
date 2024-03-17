import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'first' },
      { content: 'second' },
      { content: 'trird' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {};

