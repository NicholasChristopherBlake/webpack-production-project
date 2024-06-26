import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement; // 3 necessary props because they are important
  toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, content, header, sidebar, toolbar } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.mainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
