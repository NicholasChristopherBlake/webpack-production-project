import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outlined: Story = {
  args: {
    variant: 'outline',
  },
};

export const Clear: Story = {
  args: {
    variant: 'clear',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const OutlinedDark: Story = {
  args: {
    variant: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeM: Story = {
  args: {
    variant: 'outline',
    square: true,
    size: 'm',
  },
};

export const SquareSizeL: Story = {
  args: {
    variant: 'outline',
    square: true,
    size: 'l',
  },
};

export const SquareSizeXL: Story = {
  args: {
    variant: 'outline',
    square: true,
    size: 'xl',
  },
};

export const OutlinedSizeL: Story = {
  args: {
    variant: 'outline',
    size: 'l',
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    variant: 'outline',
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outline',
    disabled: true,
  },
};
