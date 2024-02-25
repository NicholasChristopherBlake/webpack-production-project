import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'shared/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {};

