import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {};

