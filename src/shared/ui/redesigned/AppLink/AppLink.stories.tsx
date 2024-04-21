import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'Text',
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
  args: {
    variant: 'red',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
