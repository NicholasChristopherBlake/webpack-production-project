import { FC, memo, useCallback } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';

import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
  ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
      toggleTheme((newTheme) => {
        dispatch(saveJsonSettings({ theme: newTheme }));
      });
    }, [dispatch, toggleTheme]);

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR}
            onClick={onToggleHandler}
            className={classNames('', {}, [className])}
          >
            <IconDeprecated
              inverted
              Svg={ThemeIconDeprecated}
              width={40}
              height={40}
            />
          </ButtonDeprecated>
        }
      />
    );
  },
);
