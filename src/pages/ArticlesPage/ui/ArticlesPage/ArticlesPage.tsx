import { ArticleList, ArticleView, ArticleViewSelector } from 'entity/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList }
  from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { initArticlesPage }
  from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage }
  from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles }
  from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticlesPage);
