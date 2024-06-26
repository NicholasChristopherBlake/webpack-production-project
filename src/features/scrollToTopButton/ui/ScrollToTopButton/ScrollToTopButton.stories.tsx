import type { Meta, StoryObj } from '@storybook/react';

import { ScrollToTopButton } from './ScrollToTopButton';

const meta: Meta<typeof ScrollToTopButton> = {
  title: 'shared/ScrollToTopButton',
  component: ScrollToTopButton,
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof ScrollToTopButton>;

export const Primary: Story = {};

