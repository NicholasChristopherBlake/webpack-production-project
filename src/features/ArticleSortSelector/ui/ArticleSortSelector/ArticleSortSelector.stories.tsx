import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {};
