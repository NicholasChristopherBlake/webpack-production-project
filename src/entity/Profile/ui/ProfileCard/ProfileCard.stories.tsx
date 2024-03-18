import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import AvatarImg from '@/shared/assets/tests/avatar-1.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 25,
      country: Country.France,
      lastname: 'Morgan',
      first: 'Nick',
      city: 'Provance',
      currency: Currency.EUR,
      avatar: AvatarImg,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
