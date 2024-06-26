import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const PrimaryCanEdit: Story = {
  decorators: StoreDecorator({
    articleDetails: {
      data: {
        id: '1',
        user: {
          id: '1',
        },
      },
    },
    user: {
      authData: {
        id: '1',
      },
    },
  }),
};

export const PrimaryNoEdit: Story = {
  decorators: StoreDecorator({
    articleDetails: {
      data: {
        id: '1',
        user: {
          id: '2',
        },
      },
    },
    user: {
      authData: {
        id: '1',
      },
    },
  }),
};
