import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
  title: 'shared/ArticleDetails',
  component: ArticleDetails,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {};

