import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import AvatarImg from '@/shared/assets/tests/avatar-1.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
