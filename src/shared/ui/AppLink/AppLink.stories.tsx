import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
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
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],

};

export const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],

};

// export const OutlinedDark: Story = {
//   args: {
//     theme: ThemeButton.OUTLINE,
//   },
//   decorators: [
//     (Story) => (ThemeDecorator(Theme.DARK)(Story)),
//     // (Story) => (
//     //   <ThemeDecorator theme={Theme.DARK}>
//     //     <Story />
//     //   </ThemeDecorator>
//     // ),
//   ],
// };

