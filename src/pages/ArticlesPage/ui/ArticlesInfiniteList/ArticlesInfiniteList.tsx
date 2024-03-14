import { ArticleList } from 'entity/Article';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
  from '../../model/selectors/articlesPageSelectors';

interface ArticlesInfiniteListProps {
   className?: string;
}

export const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) return <Text body={t('Error while loading articles')} />;

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
    </div>
  );
});
