import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsButton } from './NotificationsButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationsButton> = {
  title: 'features/NotificationsButton',
  component: NotificationsButton,
  args: {
  },
  decorators: [
    StoreDecorator({}),
  ],
};

export default meta;
type Story = StoryObj<typeof NotificationsButton>;

export const Primary: Story = {};

