import type { Meta, StoryObj } from '@storybook/react';

import { ArticleEditPage } from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'shared/ArticleEditPage',
  component: ArticleEditPage,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {};

