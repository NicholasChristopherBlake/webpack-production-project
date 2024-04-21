import type { Meta, StoryObj } from '@storybook/react';

import { MainLayout } from './MainLayout';

const meta: Meta<typeof MainLayout> = {
  title: 'shared/MainLayout',
  component: MainLayout,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {};

