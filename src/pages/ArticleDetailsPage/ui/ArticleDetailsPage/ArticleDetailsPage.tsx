import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  // Also added for storybook
  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Article has not been found')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      {/* The || '1' is added for storybook to work, because useParams don't work there */}
      <ArticleDetails id={id || '1'} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
