import {
  ReactNode, useEffect, useMemo, useState,
} from "react";
import {
  ThemeContext,
} from '@/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
|| Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.remove(Theme.ORANGE);
      document.body.classList.add(theme);
    } else if (theme === Theme.ORANGE) {
      document.body.classList.remove(Theme.LIGHT);
      document.body.classList.add(theme);
    } else if (theme === Theme.LIGHT) {
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
