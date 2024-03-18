import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationsList } from '@/entity/Notification';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import cls from './NotificationsButton.module.scss';

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
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  if (isMobile) {
    return (
      <div>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationsList />
          </Drawer>
        </AnimationProvider>
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
