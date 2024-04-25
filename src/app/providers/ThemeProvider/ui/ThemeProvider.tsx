import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entity/User';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT, // default value is here
  );

  // might not be the best solution
  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
