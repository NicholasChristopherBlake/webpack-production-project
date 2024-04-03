import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entity/User';

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'Nick',
          avatar:
            'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const User: Story = {};
export const Admin: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'Nick',
          avatar:
            'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
          roles: [UserRole.ADMIN],
        },
      },
    }),
  ],
};
