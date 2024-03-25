import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entity/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <RatingCard
        feedbackTitle="Please leave feedback about this article"
        hasFeedback
        title="What do you think about this article?"
      />
    </Page>
  );
});

export default MainPage;
