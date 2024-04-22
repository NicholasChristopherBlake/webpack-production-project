import { ReactNode, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}
/**
 * In new design Tabs can be vertical or horizontal. We use Flex here
 */
export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick, direction = 'row' } = props;
  const { t } = useTranslation();

  const clickHandle = useCallback(
    // using closures again because onClick should get event as argument and not tab
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="border-round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
