import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entity/Article';
import { SortOrder } from '@/shared/types/order';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    order,
    search,
    sort,
    type,
  } = props;
  const { t } = useTranslation('articles');

  return (
    <Card
      className={classNames(cls.articlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          placeholder={t('Search')}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleTypeTabs
          onChangeType={onChangeType}
          value={type}
          className={cls.tabs}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
