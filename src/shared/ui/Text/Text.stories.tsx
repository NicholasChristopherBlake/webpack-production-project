import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,

};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title Title Title',
    body: 'Lorem ipsum dolor sit amet',
  },
};
export const Error: Story = {
  args: {
    title: 'Title Title Title',
    body: 'Lorem ipsum dolor sit amet',
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Title Title Title',
  },
};
export const onlyBody: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title Title Title',
    body: 'Lorem ipsum dolor sit amet',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const onlyTitleDark: Story = {
  args: {
    title: 'Title Title Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const onlyBodyDark: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeL: Story = {
  args: {
    title: 'Title Title Title',
    body: 'Lorem ipsum dolor sit amet',
    size: TextSize.L,
  },
};
