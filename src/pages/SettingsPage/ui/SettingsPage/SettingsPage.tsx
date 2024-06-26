import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UIDesignSwitcher } from '@/features/UIDesignSwitcher';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page>
      <VStack gap="16">
        <Text title={t('User settings')} />
        <UIDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
