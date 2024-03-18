import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/editableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  args: {
  },
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          first: 'Arthur',
          lastname: 'Morgan',
          age: 28,
          city: 'Madrid',
          username: 'admin',
          avatar: '12312412412',
          currency: Currency.EUR,
          country: Country.Spain,
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {};
