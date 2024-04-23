import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import GridIconDeprecated from '@/shared/assets/icons/grid-24-24.svg';

import ListIcon from '@/shared/assets/icons/burger.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';

import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entity/Article';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => GridIcon,
      off: () => GridIconDeprecated,
    }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  // Using closures to pass VIEW into onClick function (not event)
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.articleViewSelectorRedesigned, {}, [
            className,
          ])}
          border="border-round"
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                key={viewType.view}
                clickable
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                className={classNames(
                  '',
                  { [cls.notSelected]: viewType.view !== view },
                  [],
                )}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames(
                  '',
                  { [cls.notSelected]: viewType.view !== view },
                  [],
                )}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
