import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  args: {
    comments: [
      {
        id: '1',
        text: 'some comment',
        user: {
          id: '1',
          username: 'Nick',
          avatar:
            'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
        },
      },
      {
        id: '2',
        text: 'some comment 2',
        user: {
          id: '1',
          username: 'Nick',
          avatar:
            'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
        },
      },
      {
        id: '3',
        text: 'some comment 3',
        user: {
          id: '1',
          username: 'Nick',
          avatar:
            'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {};
export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};
