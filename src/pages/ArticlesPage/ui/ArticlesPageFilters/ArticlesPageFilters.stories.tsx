import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleView } from '@/entity/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      articlesPage: {
        view: ArticleView.LIST,
        order: 'asc',
        limit: 4,
        sort: ArticleSortField.CREATED,
      },
    }),
  ],
};
