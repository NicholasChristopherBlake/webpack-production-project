import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('Главная страница')}
      <Input placeholder={t("Enter text")} value={value} onChange={onChange} />
    </div>
  );
}

export default MainPage;
