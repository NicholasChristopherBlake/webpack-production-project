import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/ui/Page";

const ForbiddenPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('You dont have access to this page')}
    </Page>
  );
});

export default ForbiddenPage;