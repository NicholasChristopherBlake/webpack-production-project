import type { Meta, StoryObj } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

const meta: Meta<typeof ArticleAdditionalInfo> = {
  title: 'shared/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleAdditionalInfo>;

export const Primary: Story = {};

