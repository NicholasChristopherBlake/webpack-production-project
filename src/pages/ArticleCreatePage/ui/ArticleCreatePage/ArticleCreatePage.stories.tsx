import type { Meta, StoryObj } from '@storybook/react';

import ArticleCreatePage from './ArticleCreatePage';

const meta: Meta<typeof ArticleCreatePage> = {
  title: 'pages/ArticleCreatePage',
  component: ArticleCreatePage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleCreatePage>;

export const Primary: Story = {};
