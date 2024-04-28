import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ArticleEditPage.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetails } from '@/entity/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleEditPageProps {
  className?: string;
}

// TODO создать нормальную страницу редактирования статьи
// TODO попробовать создать страницу для СОЗДАНИЯ статьи
// TODO - create additional feature ArticleCreateButton, подумать куда ее поместить

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      <VStack max gap="16">
        {isEdit && <Text title={t('Editing article with ID') + id} />}
        <Card border="border-semi" padding="24" max className={className}>
          <ArticleDetails id={id} />
        </Card>
      </VStack>
    </Page>
  );
});

export default memo(ArticleEditPage);
