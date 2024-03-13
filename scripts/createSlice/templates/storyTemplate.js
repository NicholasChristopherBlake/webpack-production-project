module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {}`;
