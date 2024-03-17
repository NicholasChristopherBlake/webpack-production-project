import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NotificationsList } from 'entity/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
   className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames(cls.notificationsButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
          )}
    >
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
