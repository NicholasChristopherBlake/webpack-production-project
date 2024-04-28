import type { Meta, StoryObj } from '@storybook/react';

import { ReturnBackButton } from './ReturnBackButton';

const meta: Meta<typeof ReturnBackButton> = {
  title: 'shared/ReturnBackButton',
  component: ReturnBackButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ReturnBackButton>;

export const Primary: Story = {};
