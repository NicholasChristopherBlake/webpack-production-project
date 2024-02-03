import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
}

export default MainPage;
