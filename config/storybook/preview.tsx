import React from 'react';
import { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from
  '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from
  '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { TranslationDecorator } from
  '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../../src/shared/lib/ThemeProvider/ThemeContext';

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
  ],
};

export default preview;
