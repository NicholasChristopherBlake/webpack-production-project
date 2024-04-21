import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import cls from './NotificationsList.module.scss';
import { useNotifications } from '../../api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.notificationsList, {}, [className])}
      >
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.notificationsList, {}, [className])}
    >
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
