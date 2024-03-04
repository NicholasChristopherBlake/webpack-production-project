import {
  FC, Suspense, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entity/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entity/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicReducerLoader, ReducersList }
  from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routePaths';
import { Page } from 'widgets/Page/Page';
import { PageLoader } from 'widgets/PageLoader';
import { fetchCommentsByArticleId }
  from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments }
  from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from
  '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

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
          <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
            {t('Back to the list')}
          </Button>
          {/* The || '1' is added for storybook to work, because useParams don't work there */}
          <ArticleDetails id={id || '1'} />
          <Text className={cls.commentTitle} title={t('Comments')} />
          <AddCommentForm
            onSendComment={onSendComment}
          />
          <CommentList
            isLoading={commentsIsLoading}
            comments={comments}
          />
        </Page>
      </Suspense>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
