import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Comment } from '@/entity/Comment';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const comment: Comment = {
  id: "1",
  text: "some comment",
  user: {
    id: '1',
    username: 'Nick',
    avatar: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
  },
};

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          ids: ['1'],
          entities: {
            1: comment,
          },
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {};

