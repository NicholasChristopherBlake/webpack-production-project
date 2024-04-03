import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { Theme } from "@/shared/const/theme";
// turn off linter because these are test files
// eslint-disable-next-line nick-plugin/fsd-layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider"; // for Cypress
// eslint-disable-next-line nick-plugin/fsd-layer-imports
import "@/app/styles/index.scss"; // for Cypress

// Add async reducers for child components in React Testing Library tests
export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  // theme is not needed for RTK, but needed for Cypress, that's why we add it
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions
}

// Decomposed for reusing in tests like Cypress
export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState as StateSchema}
      >
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
