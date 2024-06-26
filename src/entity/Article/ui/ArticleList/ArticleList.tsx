import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.GRID,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation('articles');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Articles have not been found')} />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          gap="16"
          wrap="wrap"
          className={classNames(cls.articleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.length > 0 ? articles.map(renderArticle) : null}
          {isLoading && getSkeletons(view)}
          {/* {getSkeletons(view)} */}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.articleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {articles.length > 0 ? articles.map(renderArticle) : null}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
});
