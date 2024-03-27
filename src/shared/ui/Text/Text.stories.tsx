import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  args: {
    title: 'Title Title Title',
    body: 'Lorem ipsum dolor sit amet',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
export const Inverted: Story = {
  args: {
    theme: TextTheme.INVERTED,
  },
};

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Title Title Title',
    body: '',
  },
};
export const onlyBody: Story = {
  args: {
    title: '',
    body: 'Lorem ipsum dolor sit amet',
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const onlyTitleDark: Story = {
  args: {
    title: 'Title Title Title',
    body: '',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const onlyBodyDark: Story = {
  args: {
    title: '',
    body: 'Lorem ipsum dolor sit amet',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeS: Story = {
  args: {
    size: TextSize.S,
  },
};
export const SizeM: Story = {
  args: {
    size: TextSize.M,
  },
};
export const SizeL: Story = {
  args: {
    size: TextSize.L,
  },
};

