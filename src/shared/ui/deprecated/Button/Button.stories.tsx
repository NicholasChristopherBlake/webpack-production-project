import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
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

export const Primary: Story = {};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outlined: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};

export const backgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const OutlinedDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeM: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
  },
};

export const OutlinedSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
