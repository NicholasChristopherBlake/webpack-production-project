import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ArticleCreatePage.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleCreatePageProps {
  className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');

  return (
    <Page className={classNames(cls.articleCreatePage, {}, [className])}>
      <Text title={t('Creating a new article')} />
    </Page>
  );
});

export default memo(ArticleCreatePage);
