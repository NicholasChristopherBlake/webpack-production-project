import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { getUserAuthData } from '@/entity/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  (props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
      return null;
    }

    return (
      <AppLink
                    to={item.path}
                    className={classNames(
                      cls.itemRedesigned,
                      { [cls.collapsedRedesigned]: collapsed },
                      [],
                    )}
                    activeClassName={cls.active}
                  >
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>
                      {/* i18next-extract-disable-next-line */}
                      {t(item.text)}
                    </span>
                  </AppLink>
    );
  },
);
