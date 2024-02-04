import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

