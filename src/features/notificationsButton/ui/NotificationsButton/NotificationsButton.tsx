import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationsList } from '@/entity/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationsButton.module.scss';

import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';

import { Popover } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
      off={
        <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Popover
            className={classNames(cls.notificationsButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationsList className={cls.notifications} />
          </Popover>
        }
        off={
          <PopoverDeprecated
            className={classNames(cls.notificationsButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationsList className={cls.notifications} />
          </PopoverDeprecated>
        }
      />
    </div>
  );
});
