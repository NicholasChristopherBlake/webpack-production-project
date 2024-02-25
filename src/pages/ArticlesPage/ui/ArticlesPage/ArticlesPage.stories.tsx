import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
  title: 'shared/ArticlesPage',
  component: ArticlesPage,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};

