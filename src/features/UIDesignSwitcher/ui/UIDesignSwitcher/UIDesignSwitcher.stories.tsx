import type { Meta, StoryObj } from '@storybook/react';

import { UIDesignSwitcher } from './UIDesignSwitcher';

const meta: Meta<typeof UIDesignSwitcher> = {
    title: 'features/UIDesignSwitcher',
    component: UIDesignSwitcher,
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof UIDesignSwitcher>;

export const Primary: Story = {}