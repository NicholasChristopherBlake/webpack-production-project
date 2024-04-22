import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entity/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

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
    { content: t('Profile'), href: getRouteProfile(authData.id) },
    { content: t('Sign Out'), onClick: onLogout },
  ];

  return (
    <Dropdown
                direction="bottom left"
                className={classNames('', {}, [className])}
                items={items}
                trigger={<Avatar size={40} src={authData.avatar} />}
              />
  );
});
