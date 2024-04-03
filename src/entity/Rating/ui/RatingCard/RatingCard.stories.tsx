import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
  args: {},
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Unrated: Story = {
  args: {
    title: 'Send your rating',
    hasFeedback: true,
    feedbackTitle: 'Please write your feedback for improving quality',
  },
};
export const Rated: Story = {
  args: {
    rate: 4,
  },
};
