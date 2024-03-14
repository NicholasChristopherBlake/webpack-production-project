import { ArticleDetails } from 'entity/Article';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import {
  FC, Suspense, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList }
  from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/ui/Page';
import { PageLoader } from 'widgets/PageLoader';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  // Also added for storybook
  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Article has not been found')}
      </Page>
    );
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      {/* Added suspense for storybook */}
      <Suspense fallback={<PageLoader />}>
        <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
          <VStack gap="16" max>
            <ArticleDetailsPageHeader />
            {/* The || '1' is added for storybook to work, because useParams don't work there */}
            <ArticleDetails id={id || '1'} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
          </VStack>
        </Page>
      </Suspense>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
