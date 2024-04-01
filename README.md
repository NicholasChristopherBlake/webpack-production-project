## Run project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - run server and frontend project in dev mode
```

----

## Scripts

- `npm run start` - Start frontend project dev server using Webpack
- `npm run start:vite` - Start frontend project dev server using Vite
- `npm run start:dev` - Start frontend project dev server and backend JSON-server using Webpack
- `npm run start:dev:vite` - Start frontend project dev server and backend JSON-server using Vite
- `npm run start:dev:server` - Start backend JSON server
- `npm run build:prod` - Production mode build
- `npm run build:dev` - Development mode build (not minimized)
- `npm run lint:ts` - Linting TS files with ESLint
- `npm run lint:ts:fix` - Fixing TS files with ESLint
- `npm run lint:scss` - Linting SCSS files with Stylelint
- `npm run lint:scss:fix` - Fixing SCSS files with Stylelint
- `npm run test:unit` - Run unit tests with Jest
- `npm run test:ui` - Run screenshot tests with Loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate JSON report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Start Storybook
- `npm run storybook:build` - Build Storybook
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Architecture

Project is written using Feature Sliced Design architecture/methodology for frontend

Link to documentation - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Translations

Library i18next is used for working with translations in the project.
Files with translations are stored in `public/locales`.

For a more comfortable work it is recommended to install plugin for VSCode - i18next Ally.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Testing

There are 4 types of tests, which are used in this project:
1) Unit tests using Jest - `npm run test:unit`
2) Integration tests on components using React testing library -`npm run test:unit`
3) Screenshot tests using Loki `npm run test:ui`
4) e2e tests using Cypress `npm run test:e2e`

More details about tests - [Tests Documentation](/docs/tests.md)

----

## Linting

ESLint is used in project for checking Typescript code and Stylelint is used for checking style files.

For strict control of following main architectural principles we use custom-made ESLint plugin
*eslint-plugin-nick-plugin*,
that contains 3 rules
1) fsd-path-checker - doesn't allow to use absolute imports inside one slice/module
2) fsd-layer-imports - checks whether layers are used correctly according to FSD (layers can use only lower layers inside of them)
3) fsd-public-api-imports - allows import from other slices/modules only from Public API. Has autofix

##### Starting linters
- `npm run lint:ts` - Check TS files with linter
- `npm run lint:ts:fix` - Fix TS files with linter
- `npm run lint:scss` - Check SCSS files with linter
- `npm run lint:scss:fix` - Fix SCSS files with linter

----
## Storybook

In the project for each component there's a storycase describing it.
Requests to the server are mocked using storybook-addon-mock.

File with storycase is placed next to the component - it has extension .stories.tsx

Run storybook with this command:
- `npm run storybook`

More details about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};
```


----

## Project configuration

For development project has 2 configs:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both builders are adapted for the main features of the app.

All configuration is placed in /config
- /config/babel - Babel configuration
- /config/build - Webpack configuration
- /config/jest - testing environment configuration
- /config/storybook - Storybook configuration

Folder `scripts` has different scripts for refactoring/automatic writing of code/generation of reports, etc.

----

## CI pipeline and pre-commit hooks

Github Actions configuration is placed in /.github/workflows.
In CI we run all kinds of tests, project and storybook build, linting.

In pre-commit hooks we run linters, config is placed in /.husky

----

### Working with data

Work with data is handled using Redux Toolkit. Reusable entities should be normalized using EntityAdapter from Redux for a better optimization.

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous loading of reducers (for optimization purposes - lazy loading) we use
[DynamicReducerLoader](/src/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader.tsx)

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
