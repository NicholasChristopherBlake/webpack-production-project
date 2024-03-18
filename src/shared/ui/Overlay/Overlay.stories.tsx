import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'shared/Overlay',
  component: Overlay,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {};

