import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from "@/shared/const/router";
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entity/User';

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
  return (
    <Dropdown
      direction="bottom left"
      className={classNames('', {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t('Admin panel'), href: RoutePath.admin_panel }]
          : []),
        { content: t('Profile'), href: RoutePath.profile + authData.id },
        { content: t('Sign Out'), onClick: onLogout },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
