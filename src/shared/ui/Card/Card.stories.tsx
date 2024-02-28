import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  args: {
    children: <Text title="test" body="text text" />,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {};

