import { StoryFn } from "@storybook/react";
// eslint-disable-next-line nick-plugin/fsd-layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";

// Second variant as a function
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

// interface Props {
// children?: React.ReactNode;
// theme: Theme;
// }
// export const ThemeDecorator: FC<Props> = ({ children, theme }) => (
//   <div className={`app ${theme}`}>{children}</div>
// )
