import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationsList } from '@/entity/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationsButton.module.scss';

import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
  const { className } = props;
  const isMobile = useDevice();
  const [isOpen, setIsOpen] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
  );

  if (isMobile) {
    return (
      <div>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationsList />
        </Drawer>
      </div>
    );
  }

  return (
    <div>
      <Popover
                      className={classNames(cls.notificationsButton, {}, [className])}
                      direction="bottom left"
                      trigger={trigger}
                    >
                      <NotificationsList className={cls.notifications} />
                    </Popover>
    </div>
  );
});
