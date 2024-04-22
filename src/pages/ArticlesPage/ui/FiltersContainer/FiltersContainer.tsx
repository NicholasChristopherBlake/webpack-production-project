import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props;
  const {
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    order,
    search,
    sort,
    type,
  } = useArticlesFilters();

  return (
    <ArticlesFilters
      search={search}
      sort={sort}
      onChangeSort={onChangeSort}
      type={type}
      onChangeSearch={onChangeSearch}
      order={order}
      onChangeOrder={onChangeOrder}
      onChangeType={onChangeType}
      className={className}
    />
  );
});
