import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
  title: 'shared/redesigned/Text',
  component: Text,
  args: {
    title: 'Title Title Title',
    body: 'Lorem ipsum dolor sit amet',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
export const Error: Story = {
  args: {
    variant: 'error',
  },
};
export const Accent: Story = {
  args: {
    variant: 'accent',
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
    size: 's',
  },
};
export const SizeM: Story = {
  args: {
    size: 'm',
  },
};
export const SizeL: Story = {
  args: {
    size: 'l',
  },
};
