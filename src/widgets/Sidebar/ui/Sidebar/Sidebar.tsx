import { FC, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList],
  );

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className],
          )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
          >
            {collapsed ? '>' : '<'}
          </Button>

          <VStack role="navigation" gap="8" className={cls.items}>
            {itemsList}
          </VStack>

          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
    />
  );
});
