import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <button type="button">123321321312</button>
      {t('Главная страница')}
    </Page>
  );
});

export default MainPage;
