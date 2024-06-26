import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

// use initialTheme everywhere instead of defaultTheme
// don't get theme from jsonSettings here. Use HOC withTheme

// Last chosen theme of the user on THIS particular device
const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT, // default value is here
  );

  // might not be the best solution
  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setIsThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
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

  // Could be done like this as well:
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
