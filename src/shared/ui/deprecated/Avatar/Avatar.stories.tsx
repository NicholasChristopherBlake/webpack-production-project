import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/avatar-1.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/deprecated/Avatar',
  component: Avatar,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
