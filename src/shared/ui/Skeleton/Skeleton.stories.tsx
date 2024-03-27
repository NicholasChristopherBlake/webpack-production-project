import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};
export const Circle: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100,
  },
};
export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: ThemeDecorator(Theme.DARK),
};
export const CircleDark: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100,
  },
  decorators: ThemeDecorator(Theme.DARK),
};
