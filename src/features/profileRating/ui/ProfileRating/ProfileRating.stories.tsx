import type { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';

const meta: Meta<typeof ProfileRating> = {
  title: 'features/ProfileRating',
  component: ProfileRating,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Primary: Story = {};

