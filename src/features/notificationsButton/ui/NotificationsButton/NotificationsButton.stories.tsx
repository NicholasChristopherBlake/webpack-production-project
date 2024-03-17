import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsButton } from './NotificationsButton';

const meta: Meta<typeof NotificationsButton> = {
  title: 'features/NotificationsButton',
  component: NotificationsButton,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof NotificationsButton>;

export const Primary: Story = {};

