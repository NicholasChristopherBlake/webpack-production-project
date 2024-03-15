import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from "../../model/consts/articleConsts";

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('articles');

  const typeTabs = useMemo<TabItem[]>(() => [
    // if you have a lot of types - use cycle
    {
      value: ArticleType.ALL,
      content: t('All articles'),
    }, {
      value: ArticleType.IT,
      content: t('IT'),
    }, {
      value: ArticleType.ECONOMICS,
      content: t('ECONOMICS'),
    }, {
      value: ArticleType.SCIENCE,
      content: t('SCIENCE'),
    },
  ], [t]);

  const onTabsClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabsClick}
    />
  );
});
