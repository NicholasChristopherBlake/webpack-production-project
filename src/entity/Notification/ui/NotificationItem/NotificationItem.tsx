import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';

interface NotificationItemProps {
   className?: string;
   item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationItem, {}, [className])}
    >
      <Text title={item.title} body={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <AppLink
        className={cls.link}
        target="_blank"
        to={item.href}
        rel="noreferrer"
      >
        {content}
      </AppLink>
    );
  }

  return content;
});
