import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/redesigned/Button';

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
      <Button onClick={toggle} variant="clear">
                    {short ? t('Short Lang') : t('Язык')}
                  </Button>
    );
  },
);
