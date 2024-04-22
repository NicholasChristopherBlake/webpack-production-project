import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/order';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entity/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending'),
      },
      {
        value: 'desc',
        content: t('descending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('date of creation'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.articleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text body={t('Sort by')} />
            <Listbox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <Listbox
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
          <Select<ArticleSortField>
            options={sortFieldOptions}
            label={t('Sort by')}
            value={sort}
            onChange={onChangeSort}
          />
          <Select<SortOrder>
            options={orderOptions}
            label={t('by')}
            value={order}
            onChange={onChangeOrder}
            className={cls.order}
          />
        </div>
      }
    />
  );
});
