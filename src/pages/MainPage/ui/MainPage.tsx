import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <HStack>
        <div>asdasd</div>
        <Listbox
          defaultValue="Choose value"
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            { value: '1', content: '123' },
            { value: '2', content: '1235' },
            { value: '3', content: '123', disabled: true },
            { value: '4', content: '1234' },
          ]}

        />
      </HStack>
      <div>asdasd</div>
      <div>asdasd</div>
      <div>asdasd</div>
      <div>asdasd</div>
    </Page>
  );
});

export default MainPage;
