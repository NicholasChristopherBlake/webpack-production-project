import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/redesigned/Button';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';

import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button onClick={toggle} variant="clear">
            {short ? t('Short Lang') : t('Язык')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
          >
            {short ? t('Short Lang') : t('Язык')}
          </ButtonDeprecated>
        }
      />
    );
  },
);
