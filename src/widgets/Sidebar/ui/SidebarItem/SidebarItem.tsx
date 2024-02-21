import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  (props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    return (
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>
          {/* i18next-extract-disable-next-line */}
          {t(item.text)}
        </span>
      </AppLink>
    );
  },
);
