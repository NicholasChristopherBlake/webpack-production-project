import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/redesigned/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const RowGap4: Story = {
  args: {
    gap: '4',
  },
};
export const RowGap8: Story = {
  args: {
    gap: '8',
  },
};
export const RowGap16: Story = {
  args: {
    gap: '16',
  },
};
export const RowGap32: Story = {
  args: {
    gap: '32',
  },
};

export const ColumnGap4: Story = {
  args: {
    direction: 'column',
    gap: '4',
  },
};
export const ColumnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
  },
};
export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
  },
};
export const ColumnGap32: Story = {
  args: {
    direction: 'column',
    gap: '32',
  },
};

export const RowJustifyEnd: Story = {
  args: {
    justify: 'end',
  },
};
export const RowJustifyBetween: Story = {
  args: {
    justify: 'between',
  },
};
export const ColumnAlignStart: Story = {
  args: {
    direction: 'column',
    align: 'start',
  },
};
export const ColumnAlignEnd: Story = {
  args: {
    direction: 'column',
    align: 'end',
  },
};
