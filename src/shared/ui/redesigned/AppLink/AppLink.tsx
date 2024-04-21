import { FC, ForwardedRef, ReactNode, forwardRef } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

// Need forwardRef for Dropdown component
export const AppLink: FC<AppLinkProps> = forwardRef(
  (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      to,
      className,
      children,
      variant = 'primary',
      activeClassName = '',
      ...otherProps
    } = props;
    return (
      <NavLink
        ref={ref}
        to={to}
        className={({ isActive }) =>
          classNames(cls.appLink, { [activeClassName]: isActive }, [
            className,
            cls[variant],
          ])
        }
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
