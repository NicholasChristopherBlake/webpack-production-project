import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '@/entity/Article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
  args: {
    value: ArticleType.ALL,
  },
};
