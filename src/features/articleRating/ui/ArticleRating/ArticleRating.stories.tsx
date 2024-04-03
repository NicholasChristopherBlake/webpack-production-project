import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  args: {
    articleId: '1',
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
};
export const WithoutRate: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};
