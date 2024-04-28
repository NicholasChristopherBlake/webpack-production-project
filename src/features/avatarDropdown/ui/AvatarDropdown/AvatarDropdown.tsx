import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entity/User';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [{ content: t('Admin panel'), href: getRouteAdminPanel() }]
      : []),
    { content: t('Settings'), href: getRouteSettings() },
    { content: t('Profile'), href: getRouteProfile(authData.id) },
    { content: t('Sign Out'), onClick: onLogout },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          direction="bottom left"
          className={classNames('', {}, [className])}
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
          maxContent
        />
      }
      off={
        <DropdownDeprecated
          direction="bottom left"
          className={classNames('', {}, [className])}
          items={items}
          trigger={
            <AvatarDeprecated
              fallbackInverted
              size={30}
              src={authData.avatar}
            />
          }
        />
      }
    />
  );
});
