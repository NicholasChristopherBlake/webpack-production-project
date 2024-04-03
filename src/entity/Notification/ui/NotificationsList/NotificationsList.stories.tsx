import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { notificationsListMock } from '../../testing';

const meta: Meta<typeof NotificationsList> = {
  title: 'entities/Notification/NotificationsList',
  component: NotificationsList,
  args: {},
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationsList>;

export const Primary: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: notificationsListMock,
      },
    ],
  },
};
