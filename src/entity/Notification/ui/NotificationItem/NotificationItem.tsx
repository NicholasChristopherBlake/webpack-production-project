import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={classNames(cls.notificationItem, {}, [className])}>
          <Text title={item.title} body={item.description} />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.notificationItem, {}, [className])}
        >
          <TextDeprecated title={item.title} body={item.description} />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <AppLinkDeprecated
        className={cls.link}
        target="_blank"
        to={item.href}
        rel="noreferrer"
      >
        {content}
      </AppLinkDeprecated>
    );
  }

  return content;
});
