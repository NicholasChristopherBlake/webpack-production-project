import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = () => (Story: StoryFn) => (
  <Suspense>
    <Story />
  </Suspense>
);
