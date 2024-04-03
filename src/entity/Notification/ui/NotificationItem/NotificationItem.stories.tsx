import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { notificationItemMock } from '../../testing';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  args: {
    item: notificationItemMock,
  },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {};
