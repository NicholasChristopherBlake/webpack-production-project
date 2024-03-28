import { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/shared/const/theme';

import { RouteDecorator } from
  '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
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
    layout: 'fullscreen', // for removing paddings in storybook
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
        { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
        { name: 'orange', class: ['app', Theme.ORANGE], color: '#ffb005' },
      ],
    },
  },
  decorators: [
    (Story) => (RouteDecorator()(Story)),
    // (Story) => (ThemeDecorator(Theme.LIGHT)(Story)),
    (Story) => (SuspenseDecorator()(Story)),
  ],
};

export default preview;
