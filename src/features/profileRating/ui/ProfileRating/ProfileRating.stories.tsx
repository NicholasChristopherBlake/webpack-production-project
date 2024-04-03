import type { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
  title: 'features/ProfileRating',
  component: ProfileRating,
  args: {
    profileId: '1',
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '2',
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Unrated: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=2&profileId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};
export const Rated: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=2&profileId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 4 }],
      },
    ],
  },
};
