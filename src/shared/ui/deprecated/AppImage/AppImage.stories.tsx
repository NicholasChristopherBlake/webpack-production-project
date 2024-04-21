import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';

const meta: Meta<typeof AppImage> = {
  title: 'shared/AppImage',
  component: AppImage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
  args: {
    src: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
    alt: 'image',
    height: 200,
    width: 200,
    fallback: <Skeleton width={200} height={200} />,
    errorFallback: <div>Error</div>,
  },
};

export const ErrorState: Story = {
  args: {
    alt: 'image',
    errorFallback: <div>Error</div>,
  },
};
