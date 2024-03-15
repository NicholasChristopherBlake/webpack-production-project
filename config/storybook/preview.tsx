import React from 'react';
import { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from
  '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from
  '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { Theme } from '../../src/shared/lib/ThemeProvider/ThemeContext';
import { SuspenseDecorator } from
  '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (RouteDecorator()(Story)),
    (Story) => (ThemeDecorator(Theme.LIGHT)(Story)),
    (Story) => (SuspenseDecorator()(Story)),
  ],
};

export default preview;
