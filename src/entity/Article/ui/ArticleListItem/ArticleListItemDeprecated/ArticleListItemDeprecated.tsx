import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';

import { Text } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink';

import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import {
  ArticleView,
  ArticleBlockType,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  const types = <Text body={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text body={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text body={article.user.username} className={cls.username} />
            <Text body={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button theme={ButtonTheme.OUTLINE}>
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                {t('Read more')}
              </AppLink>
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      data-testid="ArticleListItem"
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          <Text body={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text body={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
