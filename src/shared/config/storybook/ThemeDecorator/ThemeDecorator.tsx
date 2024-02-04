import React, { FC } from "react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

// interface Props {
// children?: React.ReactNode;
// theme: Theme;
// }
// export const ThemeDecorator: FC<Props> = ({ children, theme }) => (
//   <div className={`app ${theme}`}>{children}</div>
// );

// Second variant as a function
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);
