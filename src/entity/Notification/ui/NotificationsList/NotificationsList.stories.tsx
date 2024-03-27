import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationsList> = {
  title: 'entities/Notification/NotificationsList',
  component: NotificationsList,
  args: {
  },
  decorators: [
    StoreDecorator({}),
  ],
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
        response: [
          {
            id: '1',
            title: 'Notification 1',
            description: 'Leave like and subscribe 1',
          },
          {
            id: '2',
            title: 'Notification 2',
            description: 'Leave like and subscribe 2',
          },
          {
            id: '3',
            title: 'Notification 3',
            description: 'Leave like and subscribe 3',
          },
        ],
      },
    ],
  },
};

