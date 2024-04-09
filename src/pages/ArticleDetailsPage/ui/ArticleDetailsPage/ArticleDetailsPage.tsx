import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetails } from '@/entity/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id = '1' } = useParams<{ id: string }>(); // passed default value for storybook

  if (!id) {
    return null;
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Rating card will be available soon')}</Card>}
          />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
