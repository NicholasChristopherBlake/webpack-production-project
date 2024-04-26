import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import AvatarImg from '@/shared/assets/tests/avatar-1.jpg';
import { ProfileCard } from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const primaryArgs = {
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
};

export const Primary: Story = {
  args: primaryArgs,
};

export const PrimaryRedesigned: Story = {
  args: primaryArgs,
  decorators: [NewDesignDecorator],
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

export const LoadingRedesignedDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
};
