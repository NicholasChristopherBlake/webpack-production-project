import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
  decorators: [
    StoreDecorator(
      {
      },
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {};

