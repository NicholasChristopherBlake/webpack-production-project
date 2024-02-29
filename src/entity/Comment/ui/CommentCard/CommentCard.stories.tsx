import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  args: {
    comment: {
      id: "1",
      text: "some comment",
      user: {
        id: '1',
        username: 'Nick',
        avatar: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {};
export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};

