import { StoryFn } from "@storybook/react";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from '../../i18n/i18n';

export const TranslationDecorator = (Story: StoryFn) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">
      <Story />
    </Suspense>
  </I18nextProvider>
);
